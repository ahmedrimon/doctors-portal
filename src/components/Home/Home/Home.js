import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';

import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

import Header from '../Header/Header'; 
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Form></Form>
            <Footer></Footer>
            <div className="mt-5">
                <p style={{textAlign: 'center'}}>Copyright {(new Date()).getFullYear()} All Right Reserved</p>
            </div>
        </div>
    );
};

export default Home;