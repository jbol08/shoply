import data from "./data.json";
import {ADD_TO_CART, REMOVE_FROM_CART} from './actiontype';

const INITIAL_STATE = {
    products: data.products,
    cartItems: {},


}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART: { 
            const cart = { ...state.cartItems };
            cart[action.id] = (cart[action.id] || 0) + 1;
            return { ...state, cartItems: cart };
    }

        case REMOVE_FROM_CART: {
            const cart = { ...state.cartItems };
            if (!cart[action.id]) return state;
            cart[action.id]--;
            if (cart[action.id] === 0) {
                delete cart[action.id];
            }
        
            return { ...state, cartItems: { ...state.cartItems } };
    }

    default:
      return state;
    };
}

export default rootReducer;