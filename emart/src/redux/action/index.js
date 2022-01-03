//For add item to cart
export const addCart = (product) => {
    return {
        type: "@cart/ADDITEM",
        payload: product
    };
}

//For delete Item to cart
export const delCart = ( product) => {
    return {
        type: "@cart/DELITEM",
        payload: product
    };
}

export const removeFromCart = (id) => {
    return { 
        type: '@cart/REMOVE',
        id,
    };
}

export const updateAmount = (id, qty) => {
    return {
        type: '@cart/UPDATE_AMOUNT',
        id,
        qty,
    };
}