import React from 'react';
import './Product.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    
    const { name, img, seller, price, stock ,key} = props.product;
    
    return (

        <div style={{borderBottom:"1px solid lightgray"}} className="product">
            <div>
                <img src={img} alt="" />
            </div>
        
            <div>
                <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
                <br />
                <p>by: {seller}</p>
                <br />
                <p>$ {price}</p><br />
                <p>only {stock} left in stock-order soon</p>
                
                {props.showAddToCart === true && <button className="main-button"  onClick={()=>props.handleProductAdd(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>

        </div>
    );
};

export default Product;