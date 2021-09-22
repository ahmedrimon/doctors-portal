import React from 'react';
import './MakeAppointment.css';

import doctor from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <div className="container d-flex mt-5 appointment-container">
            <div className="col-md-4">
                <img className="doctor-photo" src={doctor} alt=""/>
            </div>
            <div className="col-md-8 appointment-second">
                <h4 className="mt-3" style={{color: '#1CC7C1'}}>APPOINTMENT</h4>
                <h1 className="mt-3 text-white">Make an appointment <br/> Today</h1>
                <p className="mt-3 text-white">it is a long established fact that a reader will be distractedby the readable content of a page when looking at this</p>
                <button className="btn btn-primary mt-5">Learn More</button>
            </div>
        </div>
    );
};

export default MakeAppointment;