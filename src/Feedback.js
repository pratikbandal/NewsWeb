import React from 'react'
import fire from './fire'

class Feedback extends React.Component {
    constructor() {
        super()
        this.state = {
            countries : '',
            lastName : '',
            firstName : '',
            subject : '',
            emailId : ''
        }
        this.handleData = this.handleData.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api/countries')
            .then(response => response.json())
            .then(response => this.setState({
                countries : response.countries
            }))
    }

    handleSubmit(e) {
        e.preventDefault()
        // eslint-disable-next-line
        let messageRef = fire.database().ref('feedback').orderByKey().limitToLast
        var data = { firstname : this.state.firstName, lastname : this.state.lastName, subject : this.state.subject, country : document.querySelector('#country').value, emailId : this.state.emailId}
        fire.database().ref('feedback').push(data)
        this.setState({lastName : '', firstName : '', subject : '', emailId : ''})
        document.querySelector('#country').value = 'India'

    }

    handleData(e) {
        const {name,value} = e.target
        this.setState({
            [name] : value
        })
    }


    render() {
        //console.log(this.state.firstName)
        if(!this.state.countries) {
            const LOADER = <div className="loader"><span></span><span></span><span></span></div>
            return LOADER
        }
        return(
            
            
            <div className="containerFeedback">
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input onChange= {this.handleData} type="text" id="fname" name="firstName" placeholder="Your name.." value= {this.state.firstName}/>

                <label htmlFor="lname">Last Name</label>
                <input onChange= {this.handleData} type="text" id="lname" name="lastName" placeholder="Your last name.."  value= {this.state.lastName}/>

                <label htmlFor="email">Email Id</label>
                <input onChange= {this.handleData} type="email" id="email" name="emailId" placeholder="Email Id" value= {this.state.emailId} required/>

                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                    <option value="india">India</option>
                    {this.state.countries.map((data,index) => <option key= {index} value = {data.name}>{data.name}</option>)}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea onChange= {this.handleData} id="subject" name="subject" placeholder="Write something.."  value= {this.state.subject} style={{height:200+'px'}}></textarea>

                <input id= 'submit' type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}

export default Feedback