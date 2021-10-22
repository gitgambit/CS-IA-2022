import React,{useState} from 'react';
import logo from '../../../images/logo.png';
import './NavBar.css'
export default function Navbar() {

    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <a href="#" className='logo'>
                <img src={logo} alt='' height='70'/>
            </a>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
            <li><a href="/Login">Login</a></li> 
            </ul>
        </nav>
    )
}


/*
        <nav className="header">
            <div className="nwrapper">
                <a className="logo" href='/'>Your Logo</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>
                    <li><a href="/">Login</a></li>                
                </ul>
            </div>
        </nav> */