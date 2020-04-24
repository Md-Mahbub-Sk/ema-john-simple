import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [cart, setCart] = useState([]);


    
    const handleProductAdd = (product) =>{

        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey)
 
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity +1 ;
            sameProduct.quantity = count;
            const others = cart.filter(pd=> pd.key !==toBeAddedKey);
            newCart = [...others,sameProduct];
        }else{
            product.quantity= 1;
            newCart = [...cart,product];
        }
   
        
        
        setCart(newCart);
        
        addToDatabaseCart(product.key,count)
    }
    
    const first80 = fakeData.slice(0,80);
    const [products, setProducts] = useState(first80);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey];
            console.log(product);
            return product;
            
        })
        setCart(previousCart);
      
    },[]);
    
    
    return (
        <div className="twin-container">
            <div className="product-container">
             
                    {   
                       products.map(product=><Product showAddToCart={true} handleProductAdd={handleProductAdd} 
                        key = {product.key}
                        product={product}></Product>)      
                    }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review"><button className="main-button">Review Orders</button></Link>
                </Cart>
            </div>
           
            
            
        </div>
    );
};

export default Shop;
