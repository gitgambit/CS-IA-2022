import React, { Component, useContext } from 'react';
import { Route } from 'react-router-dom';
import '../globalstyles.css';
import axios from 'axios';
import { AccountContext } from '../../accountContext';

class Register extends Component{
    static contextType = AccountContext;
   constructor(){
       super()
           this.state = {
               name: '',
               email: '',
               number: '',
               password: ''
           }
            //changes value when form value updated and binds it to original values in data obj
           this.changeName = this.changeName.bind(this)
           this.changeEmail = this.changeEmail.bind(this)
           this.changeNumber= this.changeNumber.bind(this)
           this.changePassword = this.changePassword.bind(this)
           this.onSubmit = this.onSubmit.bind(this)
   }
   changeName(event){
       this.setState({
           name:event.target.value
        })
   }
   changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeNumber(event){
        this.setState({
            number: event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const registerUser = {
            name: this.state.name,
            email: this.state.email,
            number: parseInt(this.state.number),
            password: this.state.password
        }
        axios.post('/api/users/register', registerUser)
        .then(response => console.log(response.data))

        this.setState ({
            name: '',
            email: '',
            number: '',
            password: ''
        })
        window.alert('Successfully Registered! Move onto login.');
    }
    render(){
        const {switchToLogin} = this.context;
        return (
            <div className="boxContainer">
                <form onSubmit={this.onSubmit}  className="formContainer">
                    <input className = "input"  type="text" placeholder="Name" onChange={this.changeName} value={this.state.name}/>
                    <input className = "input"  type="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email}/>
                    <input className = "input"  type="tel" placeholder="Phone Number" onChange={this.changeNumber} value={this.state.number}/>
                    <input className = "input"  type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password}/>
                    <button className="submitButton" type="submit" value="submit">Sign Up</button>
                </form>
            <div className="question">Already have an account?</div>
            <a className="link" onClick={switchToLogin} >Sign In</a>
            </div>
        )
    }
}

export default Register;