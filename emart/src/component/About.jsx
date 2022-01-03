import React from "react";
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col md-6">
                        <h1>About Us</h1>
                        <p className="load">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, placeat! Impedit minima ducimus sequi labore repudiandae, quam fuga rem vero at blanditiis, nesciunt doloremque eos voluptas animi expedita quibusdam dolorum! Nobis amet possimus veniam aliquid ipsum cupiditate aperiam repudiandae, velit est autem quis dolorum dolorem, aliquam quaerat fugiat voluptates, pariatur inventore. Quis officia sapiente nihil delectus dolorum aperiam quasi consequuntur rerum ut, quisquam sed sunt tenetur distinctio quos iure tempora est, voluptate consequatur. Nihil, reiciendis? Consequuntur natus provident doloremque. Qui officia unde non cum dolorum at blanditiis magni dolor error nam, laborum sint reiciendis assumenda dolore omnis eveniet ratione eligendi?
                        </p>
                        <NavLink to="/contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

