import React from 'react'
import './header.css'

export default function Header(){
    return(
        <>
        <div id='main'>
            <div className='header-heading'>
                <h1>We Give You A Taste Of Home</h1>
                <h3>Away From Home!</h3>
                <p className='details'>Shop at Vandana's for an exquisite array of products that transport you back to sunny afternoons when you were 11.</p>
                <div className='header-btns'>
                    <a href='#' className='header-btn'>Order Now!</a>
                </div>
            </div>
        </div>
     </>
    )
}