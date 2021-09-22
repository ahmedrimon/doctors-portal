import React from 'react';

import winson from '../../../images/winson.png';
import lary from '../../../images/lary.png';
import blonde from '../../../images/blonde.png';

import Testimonial from '../Testimonial/Testimonial';

const testimonials = [

    {
        description: 'it is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'winson',
        place: 'california',
        image: winson
    },
    {
        description: 'it is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'lary',
        place: 'california',
        image: lary
    },
    {
        description: 'it is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'aniston',
        place: 'california',
        image: blonde
    },
    
]

const Testimonials = () => {
    return (
        <div className="container mt-5">
            <div>
                <h3 style={{color: '#1cc7c1'}}>TESTIMONIAL</h3>
                <h1>What's Our Patients <br/> Says</h1>
            </div>
            <div className="d-flex mt-4">
                {
                    testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;