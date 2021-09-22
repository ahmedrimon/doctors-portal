import React from 'react';
import './Blog.css';

const Blog = ({blog}) => {
    return (
        <div className="card container blog-container">
            <div className="card-body">

                <div>
                    <img className="testimonial-photo" src={blog.image} alt=""/>
                    <div className="mx-4">
                        <h5 style={{color: '#1CC7C1'}}>{blog.name}</h5>
                        <p className="text-secondary">{blog.date}</p> 
                    </div>
                    <div>
                        <h6>{blog.text}</h6>
                        <p className="mt-4">{blog.description}</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Blog;