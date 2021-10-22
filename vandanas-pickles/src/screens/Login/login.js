import React, { Component,useContext } from 'react';
import '../globalstyles.css';
import axios from 'axios';
import { AccountContext } from "../../accountContext.js";


class Login extends Component{
    static contextType = AccountContext;
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
        axios.post('http://localhost:5000/users/signin', loginUser)
        .then(res => 
           {
            if (res.status == 200){
                
            }
           })

        this.setState ({
            email: '',
            password: ''
        })
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
            <div className="question"> Don't have an account?</div>
            <a className="link" onClick={switchToRegister}>Sign Up</a>
            </div>
        )
    }
}

export default Login;