import React from 'react'
import { Link } from "react-router-dom"
import './footer.css';

export default function Footer() {
    return (
        <footer>
        <div class="footer">
        <div class="row">
        <ul>
        <li><a href="/ContactUs">Contact us</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="/TermsAndConditions">Terms & Conditions</a></li>
        </ul>
        </div>

        <div class="row">
        Copyright © 2021 name - All rights reserved
        </div>
        </div>
        </footer>        
    )
}
