import React from 'react';

import Blog from '../Blog/Blog';

import winson from '../../../images/winson.png';
import lary from '../../../images/lary.png';
import blonde from '../../../images/blonde.png';

const blogs = [
    {
        image: winson,
        name: 'Dr.Caudi',
        date: '23 April 2019',
        text: '2 times of brush in a day can Keep you healthy',
        description: 'it is a long established fact that by the readable content of a lot layout. The point',    
    },
    {
        image: lary,
        name: 'Dr.John Mitchel',
        date: '23 April 2019',
        text: 'The tooth cancer is taking a challenge',
        description: 'it is a long established fact that by the readable content of a lot layout. The point',    
    },
    {
        image: blonde,
        name: 'Dr.John Mitchel',
        date: '23 April 2019',
        text: 'The tooth cancer is taking a challenge',
        description: 'it is a long established fact that by the readable content of a lot layout. The point',    
    }
]

const Blogs = () => {
    return (
        <div className="container mt-5 text-center">
            <div>
                <h3 style={{color: '#1cc7c1'}}>OUR BLOG</h3>
                <h1>From Our Blog News</h1>
            </div>
            <div className="d-flex mt-4">
                {
                    blogs.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;