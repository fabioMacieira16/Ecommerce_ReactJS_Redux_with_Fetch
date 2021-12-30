import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    console.log(state);
    const dispatch = useDispatch();

    const cartItems = (cartItem) => {
        return (

            <div className="row">
                <div className="col-md-4">
                    <img src={cartItem.image} alt={cartItem.title}
                        height="200px" width="180px" />
                </div>
                <div className="col-md-4">
                    <h3>
                        {cartItem.title}
                    </h3>
                    <p className="lead fw-bold">
                        {cartItem.qty} X ${cartItem.price} = $
                        {cartItem.qty * cartItem.price}
                    </p>
                    <button className="btn btn-outline-dark me-4"
                    //onClick={() => handleButton(cartItem)}
                    >
                        <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-outline-dark me-4"
                    //onClick={() => handleButton(cartItem)}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>

            // <div className="px-4 bg-light rounded-3" key={cartItem.id}>
            //     <div className="container py-4">
            //         <buttun className="btn-close floar-end" arial-label="Close"></buttun>
            //         <div className="row justify-content-center">
            //             <div className="col-md-4">
            //                 <img src={cartItem.image} alt={cartItem.title}
            //                     height="200px" width="180px" />
            //             </div>
            //             <div className="col-md-4">
            //                 <h3>{cartItem.title}</h3>
            //                 <p className="lead fw-bold">${cartItem.price}</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    };

    return (
        <>
            {state.length !== 0 && state.map(cartItems)}
        </>
    )
}

export default Cart;


