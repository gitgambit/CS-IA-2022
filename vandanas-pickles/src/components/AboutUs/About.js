import React from 'react';
import './About.css';
import aboutimage from '../../images/aboutvandana.jpeg';

function About() {
    return (
        <>
        <h1>About Us</h1>
        <div className="sections" id='about'>
            <section>
            <img src={aboutimage} alt="im not working" />
            </section>
            <section>
            <h2 class="title">How It Started</h2>
            <p>
            Mrs Vandana Aggarwal was continually experimenting with and creating new cuisines of various types. This was the beginning of her pickle-making career; initially, she made little boxes for immediate family and friends to eat. They gave her such positive feedback that she was inspired to try new recipes and grow her production from the comfort of her own home. She began producing a variety of veggies and collecting a variety of mason jars and glass jars. Following that, she concentrated on honing her talents in order to take the pickles to the next level, ensuring that they are both distinctive and in line with what people desire to eat. She first interacted with friends and family to get their input on the types of pickles they enjoy, and also on whether they would enjoy pickles made from certain vegetables. Once she gained this knowledge and designed the pickles based on the input from people, she began selling quaintly to people in the society and communicated through WhatsApp. The prices complimented the quality of her products which helped her to sell in small fairs and also make samples to increase the number of customers.            </p> <br/>
            </section>
        </div>
        </>
    )
}

export default About;
