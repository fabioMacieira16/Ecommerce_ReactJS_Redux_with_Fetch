import React from "react";
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1 className="text-primary fw-bold mb-4">Have Some question?</h1>
                    <hr></hr>
                </div>
                <div className="row">
                    <div className="col md-5 ">
                        <img src="/assets/contact.jpg" alt="contact us" height="300px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <div className="form-label">
                                    <label >Name</label>
                                    <input type="name" className="form-control" id="inputName" placeholder="Full name" />
                                </div>
                                <div className="form-label">
                                    <label >Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label >Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;