import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Cartbuttons from './cartButtons';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const products = useSelector(store => store.products);
    const productCards = Object.keys(products).map(id => (
        <div key={id}>
            <div className="card">
                <h2 className="card-title text-center">
                    <Link to={`/products/${id}`}>{products[id].name}</Link>
                </h2>
                <Cartbuttons id={id} />
            </div>
        </div>
        
    ));
    
    
    return (
        <div>
            <h4>Click a name to see our products!</h4>
            <div className='rows'>
                {productCards}
            
            </div>
            <Link to="/cart" className="nav-link text-dark">
            See Cart
            </Link>
        </div>
    );
}

export default ProductList;
