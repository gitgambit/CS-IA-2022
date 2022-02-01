import React, { Component,useContext } from 'react';
import '../globalstyles.css';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom'
import { AccountContext } from "../../accountContext.js";


class Login extends Component{
    static contextType = AccountContext;
    loginState = {
        redirect : false,
    }
   constructor(){
       super()
           this.state = {
               email: '',
               password: ''
           }
            //changes value when form value updated and binds it to original values in data obj
           this.changeEmail = this.changeEmail.bind(this)
           this.changePassword = this.changePassword.bind(this)
           this.onSubmit = this.onSubmit.bind(this)
   }
   changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/api/users/signin', loginUser)
        .then(res => 
           {
            if (res.status == 200){
                sessionStorage.setItem('user', res.data.name);
                sessionStorage.setItem('number', res.data.number);
                this.loginState.redirect = true;
            }
           })

        this.setState ({
            email: '',
            password: ''
        })
    }

    redirectHome() {
        if (this.loginState.redirect) {
            <Redirect push to="/" />
            return window.location.reload(true);
        }
    }
    render(){
        const {switchToRegister} = this.context;
        return (
            <div className="boxContainer">
                <form onSubmit={this.onSubmit}  className="formContainer">
                    <input className = "input"  type="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email}/>
                    <input className = "input"  type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password}/>
                    <button className="submitButton" type="submit" >Sign In</button>
                </form>
                {this.redirectHome()}
            <div className="question"> Don't have an account?</div>
            <a className="link" onClick={switchToRegister}>Sign Up</a>
            </div>
            
        )
    }
}

export default withRouter(Login);