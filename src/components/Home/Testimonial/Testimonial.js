import React from 'react';
import './Testimonial.css';

const Testimonial = ({testimonial}) => {
    return (
        <div className="card card-container">
            <div className="card-body">
                <div>
                    <h6 className="card-text text-secondary">{testimonial.description}</h6>
                </div>
                <div className="d-flex mt-5">
                    <img className="testimonial-photo" src={testimonial.image} alt=""/>
                    <div className="mx-4 text-center">
                        <h5 style={{color: '#1CC7C1'}}>{testimonial.name}</h5>
                        <p className="text-secondary">{testimonial.place}</p>
                    </div>     
                </div>     
            </div>
        </div>
    );
};

export default Testimonial;