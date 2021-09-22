import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-5">
            <img src={service.img} alt=""/>
            <h5 className="mt-5">{service.name}</h5>
            <p className="mt-3 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi.</p> 
        </div>
    );
};

export default ServiceDetail;