import React, { useState} from "react";
import Login from "./Login/login";
import Register from "./Register/register";
import './index.css';
import { AccountContext } from "../accountContext";


export function Account(props){
    const [active, setActive] = useState("login"); //default page -> login
    const switchToRegister = () => {
        setTimeout(() => {
            setActive("register");
        },100);
    }
    const switchToLogin = () => {
        setTimeout(() => {
            setActive("login");
        },100);
    }
    const contextValues = {switchToRegister, switchToLogin};
    return (
        <AccountContext.Provider value={contextValues}>
        <div className="cont">
        <div className="boxCont">
            <div className="topCont">
                <div className="backDrop"/>
                {active == 'login' && (
                    <div className="headerCont">
                        <h2 className="headerText">Welcome Back</h2>
                        <h5 className="smallText">Please sign-in to continue!</h5>
                    </div>
                )}
                {active == 'register' && (
                <div className="headerCont">
                        <h2 className="headerText">Create</h2>
                        <h2 className="headerText">Account</h2>
                        <h5 className="smallText">Please sign-up to continue!</h5>
                </div>
                )}
            </div>
            <div className="innerCont">
                {active == "login" && <Login />}
                {active == "register" && <Register />}
            </div>
        </div>
        </div>
    </AccountContext.Provider>
    )
}