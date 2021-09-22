import React from 'react';

import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="header-container row mt-4">
            <div className="col-md-4 offset-md-1 m-auto">
                <h1 style={{color: '#3a4256'}}>Your New Smile <br/> Starts Here </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi quaerat magni rem. In, error!</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 offset-md-1">
                <img src={chair} alt="" className="img-fluid "/>
            </div>
        </main>
    );
};

export default HeaderMain;