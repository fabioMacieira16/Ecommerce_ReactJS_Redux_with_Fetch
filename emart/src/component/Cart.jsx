import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as CartActions from '../redux/action';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

function Cart({ cart }) {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();
    var subtotal = 0;

    const increment = (cartItem) => {
        dispatch(CartActions.updateAmount(cartItem.id, cartItem.qty + 1));
    };

    const decrement = (cartItem) => {

        dispatch(CartActions.updateAmount(cartItem.id, cartItem.qty - 1));
    };

    const handleClose = (id) => {
        dispatch(CartActions.removeFromCart(id));
    };

    const cartItems = (cartItem) => {
        subtotal = cartItem.qty * cartItem.price;
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
                                {cartItem.qty} X ${cartItem.price} = R${subtotal}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={() => decrement(cartItem)}>
                                <i className="fa fa-minus"></i>
                            </button>

                            <button className="btn btn-outline-dark me-4" onClick={() => increment(cartItem)}>
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
            <div className="container">
                <div className="px-9 my-5 bg-light rounded-3 py-5 ">
                    <div className="container py-4">
                        <div className="row">
                            <h3 className="d-flex justify-content-center">Your Cart is empty</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">
                        Procced to checkout
                    </NavLink>
                </div>
            </div>
        )
    }


    return (
        <>  {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}



const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(
    mapStateToProps,
)(Cart);


