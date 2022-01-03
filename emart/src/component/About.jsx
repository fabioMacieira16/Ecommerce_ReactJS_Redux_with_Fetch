import React from "react";
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="mt-2 mb-3">
                        <h1 className="text-primary fw-bold mb-4">We are driven by Challenges</h1>
                        <p className="lead mb-4">
                        With over 10 years of experience in the market, we are an eMarketing Digital Development agency 100% focused on increasing business results.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact US</NavLink>
                    </div>
                    <div className="col md-6 d-flex justify-content-center">
                        <img src="/assets/about.png" alt="about us" height="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

