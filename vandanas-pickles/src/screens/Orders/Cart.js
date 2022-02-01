import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';



const Cart = () => {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')); //expected arr of obj
    const name = sessionStorage.getItem('user');
    const phone = sessionStorage.getItem('number');
    const removeProduct = (id) =>{
        for (var i = 0; i<cartItems.length; i++){
            if (cartItems[i]._id == id){
                cartItems.splice(i, 1);
                break;
            }
    }
    sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
    window.location.reload(true);   
}

    const checkOut = () => {
        const Order = {
            CustomerName: name,
            PhoneNumber: phone,
            product: cartItems,
        }
        axios.post(`http://localhost:5000//api/orders/`, Order)
        .then(res => {
            console.log(res.data);
            sessionStorage.removeItem('cartItems');
            window.alert('Order placed successfully! Check Whatsapp for further details');
            window.location.reload(true);
        })
    }

    
    return (
        <div>
            <div className='row-container'>
                <div>
                    {(!name || !cartItems) ? (
                        <>
                        <h2>Cart is Empty</h2>
                        <Link to="/" className="link-deco">Start Shopping now!</Link>
                        </>
                    ): (
                        <>
                        <h2 className='cart-title'>{name}'s Shopping Cart</h2>
                        <ul>
                            {
                                
                                cartItems.map((product) => (
                                    <li>
                                        <div className='cart-row'>
                                            <div className='small-img'>
                                                <img src={product.image}
                                                alt = "" />
                                            </div>
                                            <div className='name'>
                                                {product.name}
                                            </div>
                                            <div className="price">Rs.{product.price}</div>
                                            <div className='remove-btn'>
                                                <button type="button" onClick={() => removeProduct(product._id)}>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Black_x.svg/525px-Black_x.svg.png" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        </>
                    )}
                </div>
                {(name && ( cartItems)) ? (
                <div className='col-4'>
                        <ul>
                            <li>
                                <div className='price-display'>
                                <p className='name'>
                                    Total for {cartItems.length}  items :
                                </p>
                                <p className='prices'>Rs {cartItems.reduce((a,c) => a + c.price, 0)}</p>
                            </div>
                            <p className='taxes'>*Refer to Whatsapp Invoice for breakdown of prices</p>
                            </li>
                            <li>
                                <button type="button" onClick={checkOut}
                                className="checkout-btn"
                                disabled={cartItems.length === 0}
                                >
                                    Proceed to Checkout
                                </button>
                            </li>
                        </ul>
            </div>
                ) : (
                    <div>
                    </div>
                )}
        </div>
    </div>
    )
}

export default Cart;