import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
// import { applyDiscount } from "./actions";
import { calculateTotalQuantity } from './actions';
import './App.css';
import CartButtons from "./cartButtons";

const Cart = () => {
  
  const itemCount = useSelector(st => calculateTotalQuantity(st.cartItems));
  const itemUnit = itemCount === 1 ? "item" : "items";
  const cartValue = useSelector(st => st.cartValue);
  const {cartItems, products} = useSelector(st => st);

    const showTable = () => {
        const itemRows = Object.keys(cartItems).map(id => (
          <tr key={id}>
            <td className="text-center align-middle">
              <Link to={`/products/${id}`}>{products[id].name}</Link>
            </td>
            <td className="text-center align-middle">${products[id].price}</td>
            <td className="text-center align-middle">{cartItems[id]}</td>
            <td>
              <CartButtons id={id} />
            </td>
            
          </tr>
        ));
    
        return (
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Item Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{itemRows}</tbody>
            </table>           
          );
    }
        
    
      
        return cartItems.length === 0 ? (
          <h2>No items in cart yet!</h2>
        ) : (
        <div>
            {showTable()}
            <p>
            <span className="navbar-text text-light">
            {itemCount} {itemUnit} (${cartValue})
          </span>
            </p>
            <Link to="/" className="btn btn-block btn-link">
            Go Home
            </Link>
        </div>);
    
}

export default Cart;
