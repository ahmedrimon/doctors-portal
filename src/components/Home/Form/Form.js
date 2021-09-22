import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className="form-container text-center mt-5">
            <div className="text-white">
                <h3 style={{color: '#1cc7c1'}}>CONTACT US</h3>
                <h1>Always Connect With Us</h1>
            </div>

            <form className="my-form">
                <div className="form-group">
                    <input type="text" name="email" placeholder="Email Address*"/>
                </div>
                <div className="form-group">
                    <input type="text" name="subject" placeholder="Subject*"/>
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Your Message*"></textarea>
                </div>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default Form;