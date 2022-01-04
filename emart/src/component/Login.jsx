import React, {useState} from "react";
import Modal from "./Modal";

const Login = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        console.log();
    };

    return (
        <>
            <button onClick={() => openModal(true)} className="btn btn-outline-dark me-2">Login</button>
            <Modal IsOpen={showModal} setShowModal = {setShowModal} />
        </>
    );
}

export default Login;