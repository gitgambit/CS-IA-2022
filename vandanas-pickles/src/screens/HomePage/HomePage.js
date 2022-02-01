import React, { useState, useEffect } from 'react';
import About from '../../components/AboutUs/About';
import Contact from '../../components/ContactUs/contact';
import Header from '../../components/Header/header';
import ProductList from '../../components/ProductsDisplay/ProductList';
import './HomePage.css';
import '../../components/ProductsDisplay/Products.css';
const HomePage = () => {
    return(
        <>
        <Header />
        <About />
        <div className='bg'>
        <div className='product-list-container'>
                <>
                <div className='see-more'>
                <h2 className="featured-title">Featured Products</h2>
                <h5>
                    <a href="/Products">See More!</a>
                </h5>
                </div>
                </>
                <ProductList/>
        </div>
        </div>
        <Contact />
        </>
    )
}

export default HomePage;