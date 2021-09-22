import React from 'react';

import doctors from '../../../images/doctors.png';

const Doctors = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center" style={{color: '#1cc7c1'}}>Our Doctors</h3>
            <img className="img-fluid mt-4" src={doctors} alt=""/>
        </div>
    );
};

export default Doctors;