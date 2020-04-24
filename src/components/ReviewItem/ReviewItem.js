import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    
    const {name,quantity,key,price} = props.product;
    
    return (
        <div style={{borderBottom:"1px solid gray"}}>

               
                <h3 className="product-name">{name}</h3>
                <h2>Quantity:{quantity}</h2>
                <h3>product key{key}</h3>
                <p><small>Price: ${price}</small></p>
                <button onClick={()=>props.removeItem(key)} className="main-button">Remove</button>
        </div>
        
    );
};

export default ReviewItem;