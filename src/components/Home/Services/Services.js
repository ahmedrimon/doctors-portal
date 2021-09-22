import React from 'react';
import './Services.css';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitenning from '../../../images/whitenning.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitenning',
        img: whitenning
    },
]

const Services = () => {
    return (
        <section className="service-container">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h1>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row"> 
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Services;