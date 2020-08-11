import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Covidtracker.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
import Chart from './Chart'
import CountryPicker from './CountryPicker'
import CoronaImage from './images/image.png'

class Covidtracker extends React.Component {
    constructor() {
        super()
        this.state ={
            data : {},
            country: ''
        }
        this.handleCountryChange = this.handleCountryChange.bind(this)
    }

    handleCountryChange(country) {
        console.log(country)
        if(country) {
        fetch('https://covid19.mathdro.id/api/countries/'+country+'')
            .then(response => response.json())
            .then(response => this.setState({
                data : response,
                country : country
            }))
        }
        else {
        fetch('https://covid19.mathdro.id/api/')
            .then(response => response.json())
            .then(response => this.setState({
                data : response,
                country : country
            }))
        }
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api')
            .then(response => response.json())
            .then(response => {
                const {confirmed, recovered, deaths, lastUpdate} = response
                this.setState({data : {confirmed,recovered,deaths,lastUpdate}})
            })
            
            
    }
    
    render() {
        const {confirmed,recovered,deaths,lastUpdate} = this.state.data
        if(!confirmed) {
            const LOADER = <div className="loader">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
            return LOADER
        }
        return (
            <div className = {styles.container}>
                 <img className= {styles.image} src= {CoronaImage} alt= 'COVID-19'/><br/>
                <Grid container spacing = {3} justify = 'center'>
                    <Grid item component ={Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Infected</Typography>
                            <Typography variant = 'h5'>
                                <CountUp 
                                    start = {0}
                                    end = {confirmed.value}
                                    duration={1.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component ={Card} xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                            <Typography variant = 'h5'>
                                <CountUp 
                                    start = {0}
                                    end = {recovered.value}
                                    duration={1.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component ={Card} xs={12} md={3} className = {cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                            <Typography variant = 'h5'>
                                <CountUp 
                                    start = {0}
                                    end = {deaths.value}
                                    duration={1.5}
                                    separator=','
                                />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid> <br/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/> <br/>
                <Chart data = {this.state.data} country = {this.state.country}/> <br/>
                <div className= {styles.recovery}>
                    <em><b>The Recovery percentage is:</b> {((recovered.value/confirmed.value)*100).toFixed(2)}</em> <br/>
                    <em><b>The Death percentage is:</b> {((deaths.value/confirmed.value)*100).toFixed(2)}</em>
                </div>
            </div>
            
        )
    }
}

export default Covidtracker