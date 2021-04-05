import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import './App.css';


const CartButtons = ({ id }) => {
  
    const dispatch = useDispatch();
    const add = () => dispatch(addToCart(id));
    const remove = () => dispatch(removeFromCart(id));
    return (
      <div className="d-flex justify-content-between">
        <button onClick={add} > + </button>
        <button onClick={remove}> - </button>
      </div>
    );
  }
  
  export default CartButtons;
  