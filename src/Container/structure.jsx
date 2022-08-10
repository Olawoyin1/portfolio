import React from 'react';
import Body from '../BodyComponent/main';
import Footer from '../FooterComponent/footer';
import Header from '../HeaderComponent/hero';
import './structure.css'


export default function Card(){
    return(
        <div className="container">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}