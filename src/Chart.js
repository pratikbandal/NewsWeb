import React from 'react'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

class Chart extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            dailyData : []

        }
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api/daily')
        .then(response => response.json())
        .then(response => this.setState({
            dailyData : response.map(data => ({
                confirmed : data.confirmed.total,
                deaths : data.deaths.total,
                date : data.reportDate,
            }))
        }))
    }

    render() {
        const LineChart = (
            this.state.dailyData[0] ?
            <Line
                data = {{
                    labels: this.state.dailyData.map(({ date }) => date),
                    datasets: [{
                        data: this.state.dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: this.state.dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }],
                }} 
            />
            :
            null
        )

        const barChart = (
            this.props.data.confirmed ?
                (
                    <Bar
                        data= {{
                            labels: ['Infected', 'Recovered', 'Deaths'],
                            datasets: [{
                                label: 'People',
                                backgroundColor: [
                                    'rgba(0, 0, 255, 0.5)',
                                    'rgba(0, 255, 0, 0.5)',
                                    'rgba(255, 0, 0, 0.5)',
                                ],
                                data: [this.props.data.confirmed.value, this.props.data.recovered.value, this.props.data.deaths.value]

                            }]
                        }}
                        options ={{
                            legend: {display: false},
                            title: { display: true, text: 'Current state in '+this.props.country+''},
                        }}
                    />
                ) :
                null
        )
        return (
            <div className = {styles.container}>
                {this.props.country ? barChart : LineChart}
            </div>

        )
    }
}

export default Chart