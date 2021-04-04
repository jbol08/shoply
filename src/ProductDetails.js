import React from "react";
import {  useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductDetails = () => {
    const { id } = useParams();
    const { name, price, description, image_url } = useSelector(store => ({ ...store.products[id] }));

    return (
        <div>
            <img
                className="ProductDetails-img card-img-top"
                src={image_url}
                alt={name}
            />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5>{name}</h5>
                    <p>${price}</p>
                </div>
                <p className="text-center">{description}</p>
            </div>
        </div>
    );
}
 
export default ProductDetails;