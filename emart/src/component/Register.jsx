import React from "react";

const Register = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="text-center text-dark mt-5">Registered</div>
                    <div className="text-center mb-5 text-dark">Made with bootstrap</div>
                    <div className="card my-5">

                        <form className="card body cardbody-color p-lg-5">

                            <div className="text-center">
                                <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                    width="200px" alt="profile" />
                            </div>

                            <div className="mb-3">
                                <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" placeholder="User Name" />
                            </div>
                            
                            <div className="mb-3">
                                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email@email.com" />
                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="password" />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary px-5 mb-5 w-100">Registered</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;