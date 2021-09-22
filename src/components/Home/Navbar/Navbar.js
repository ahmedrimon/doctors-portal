import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mx-5 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="#">Dental Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mx-4" href="#">Contact Us</a>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    );
};

export default Navbar;