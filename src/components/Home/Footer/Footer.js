import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container footer-container d-flex mt-4">
            <div className="footer-col-first col-md-4">
                <p>Emergency Dental Care</p>
                <p>Check Up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
                <p>Check Up</p>
            </div>
            <div className="col-md-4">
                <h6 className="text-primary">Services</h6>
                <p>Emergency Dental Care</p>
                <p>Check Up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
                <p>Check Up</p>
                <p>Check Up</p>
                <p>Check Up</p>
            </div>
            <div className="col-md-4">
            <h6 className="text-primary">Oral Health</h6>
                <p>Emergency Dental Care</p>
                <p>Check Up</p>
                <p>Treatment of Personal Diseases</p>
                <p>Tooth Extraction</p>
                <p>Check Up</p>
                <p>Check Up</p>
                <p>Check Up</p>
            </div>
            <div className="col-md-4">
            <h6 className="text-primary">Our Address</h6>
                <p>Emergency Dental Care</p>
                <p>Check Up</p>
                <p>Call Now</p>
                <button className="btn btn-primary">+565646464</button>
            </div>
        </div>
    );
};

export default Footer;