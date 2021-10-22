import React from 'react';
import './testimonials.css';
import user1 from '../../images/patrick.png';
import user2 from '../../images/nan.jpg';

function Testimonials() {
    return (
        <div id='testimonials'>
            <h1>Testimonials</h1>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>What others say about us.</h2>
                </div>
                <div className="cust-container">
                    <img src={user1} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>John Doe.</span> Food Blogger.</p>
                    <p>Great attention to detail!</p>
                </div>

                <div className="cust-container">
                    <img src={user2} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>Rebecca Flex.</span> Critic</p>
                    <p>A business to look out for!</p>
                </div>
            </section>
        </div>
    )
}

export default Testimonials;