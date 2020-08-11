import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'


class CountryPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            fectchedCountries : [ ]
        })

    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api/countries')
            .then(response => response.json())
            .then(response => this.setState({
                fectchedCountries : response.countries.map(data => (
                    data.name
                ))
            }))
    }

    render() {
        return(
            <FormControl className= {styles.formControl}>
                <NativeSelect defaultValue = "" onChange={(e) => this.props.handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {this.state.fectchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }
}

export default CountryPicker