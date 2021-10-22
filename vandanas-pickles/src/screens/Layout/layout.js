import React from 'react';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Header/NavBar/NavBar';
import './layout.css';

const Layout = (props) => {
    return (
        <React.Fragment>
        <Navbar />
        <main>
            {props.children}
        </main>
        <Footer/>
        </React.Fragment>
    )
}

export default Layout;