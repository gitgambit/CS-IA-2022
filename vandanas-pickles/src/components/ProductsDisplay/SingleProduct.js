import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Products.css'

const SingleProduct = ({product}) => {

    const addToCart = () => {
        if (sessionStorage.getItem('user')){
        axios.get(`/api/products/${product._id}`)
        .then(res => {
            const product = res.data;
            const products = [product]
            if (sessionStorage.getItem('cartItems')){
                const data = JSON.parse(sessionStorage.getItem('cartItems'));
                //data is an array of objects 
                data.push(product);
                sessionStorage.setItem('cartItems', JSON.stringify(data));
            } 
            if (!sessionStorage.getItem('cartItems')) {
            sessionStorage.setItem('cartItems', JSON.stringify(products));
            }
        })
    }else {
        window.alert('You must be logged in to add items to the cart');
    }
    }

    return(
            <div className="product-card">
                <div className="card">
                <img src= {product.image} alt="" />
                <div class="content">
                    <div className='row'>
                        <div className="title">
                        <h2>{product.name}</h2>
                         <h3>Rs.{product.price}</h3>
                        </div>
                    </div>
                    <div class="category">{product.category}</div>
                    <hr/>
                    <p>{product.description}</p>
                    <div className="buy-btn">
                        <a onClick={addToCart}>Add to Cart</a>
                    </div>
                </div>
                </div>
                </div>
    );
}

export default SingleProduct