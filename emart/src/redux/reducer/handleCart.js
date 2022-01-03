import produce from 'immer';
const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "@cart/ADDITEM":
            // Check if Product is already Exist
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) => x.id === product.id ? { ...x, qty: + 1 } : x);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,

                    }
                ]
            }
            break;

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id)
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
            break;

        case '@cart/REMOVE':
            return produce(state, draft => {
                const produceIndex = draft.findIndex(p => p.id === action.id);

                if (produceIndex >= 0) {
                    draft.splice(produceIndex, 1);
                }
            });

        case '@cart/UPDATE_AMOUNT': {
            if (action.qty <= 0) {
                return state;
            }

            return produce(state, draft => {
                const produceIndex = draft.findIndex(p => p.id === action.id);
                
                if (produceIndex >= 0) {                    
                    draft[produceIndex].qty = Number(action.qty);
                }
            });
        }


        default:
            return state;
    }
}

export default handleCart;