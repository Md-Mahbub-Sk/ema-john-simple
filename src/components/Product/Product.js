import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props.product.img)
    const { name, img, seller, price, stock } = props.product;
    return (

        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-information">

                <h3 className="product-name">{name}</h3>
                <br />
                <p>by: {seller}</p>
                <br />
                <p>$ {price}</p><br />
                <p>only {stock} left in stock-order soon</p>
                <button className="main-button" onClick={()=>props.handleProductAdd(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;