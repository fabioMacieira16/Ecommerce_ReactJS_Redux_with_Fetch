import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as CartActions from '../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = (updateAmountRequest) => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();

    const increment = (cartItem) => {
        updateAmountRequest(cartItem.id, cartItem.amount + 1);
    }

    const decrement = (cartItem) => {
        updateAmountRequest(cartItem.id, cartItem - 1);
    }

    const handleClose = (id) => {
        dispatch(CartActions.removeFromCart(id));
    }

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button 
                        onClick={() => handleClose(cartItem.id)} 
                        className="btn-close floar-end" arial-label="Close">
                    </button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title}
                                height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3> 
                            <p className="lead fw-bold">
                                {cartItem.qty} X ${cartItem.price} = $
                                {cartItem.qty * cartItem.price}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={() => increment(cartItem)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark me-4" onClick={() => decrement(cartItem)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                      <h3>Your Cart is empty</h3>  
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        <div className="container">
            <div className="row">
                <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25">
                    Procced to checkout
                </NavLink>
            </div>
        </div>
    }

    return (
        <>  {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart;


