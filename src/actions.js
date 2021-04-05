import {ADD_TO_CART,REMOVE_FROM_CART} from './actiontype';

export function addToCart(id) {
    return {
      type: ADD_TO_CART,
      id
    };
  }
  
  export function removeFromCart(id) {
    return {
      type: REMOVE_FROM_CART,
      id
    };
  }
  
  export function calculateTotalQuantity(cart) {
    let totalQuantity = 0;
    for (let id in cart) {
      totalQuantity += cart[id];
    }
    return totalQuantity;
  }
  