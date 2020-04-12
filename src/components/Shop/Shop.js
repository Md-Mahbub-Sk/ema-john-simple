import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const handleProductAdd = (product) =>{

        
        const newCart = [...cart,product];
        
        setCart(newCart);
    }
    
    const first80 = fakeData.slice(0,80);
    const [products, setProducts] = useState(first80);
    
    return (
        <div className="shop-container">
            <div className="product-container">
             
                    {   
                       products.map(product=><Product handleProductAdd={handleProductAdd} product={product}></Product>)      
                    }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
            
            
        </div>
    );
};

export default Shop;