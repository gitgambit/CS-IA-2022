import React, { useState, useEffect } from 'react';
import About from '../../components/AboutUs/About';
import Contact from '../../components/ContactUs/contact';
import Header from '../../components/Header/header';
import './HomePage.css';
const HomePage = () => {
    return(
        <>
        <Header />
        <About />
        <div className='bg'>
        </div>
        <Contact />
        </>
    )
}

export default HomePage;