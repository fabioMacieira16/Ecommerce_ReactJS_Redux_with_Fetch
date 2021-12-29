import React from "react";

import './Home.css';

const Home = () => {
    return (
        <div>
            <div class="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background"
                    heinght="550px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container-body">
                        <h5 class="card-title display-3 fw-border md-o color:black">NEW SEASON ARRIVALS </h5>
                        <p class="card-text">
                            CHECK OUT ALL THE TRENDS                        
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

