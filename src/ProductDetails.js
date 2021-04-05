import React from "react";
import {  useParams,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cartbuttons from './cartButtons';
import './App.css';


function ProductDetails() {
    const { id } = useParams();
    const { name, price, description, image_url } = useSelector(store => ({ ...store.products[id] }));

    return (
        <div>
            <img
                className="ProductDetails-img card-img-top"
                src={image_url}
                alt={name} />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5>{name}</h5>
                    <p>${price}</p>
                </div>
                <p className="text-center">{description}</p>
                <Cartbuttons id={id} />
            </div>
            <Link to="/cart" className="nav-link text-bold">
            See Cart
            </Link>
            <div>
            <Link to="/" className="nav-link text-bold">
            Go Home
            </Link>
            </div>
        </div>
    );
}
 
export default ProductDetails;