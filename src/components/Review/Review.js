import React from 'react';
import { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const auth = useAuth();

    const handlePlaceOrder = () => {
        console.log("order placed");
        setCart([]);
        processOrder();
        setOrderPlaced(true);
    }
    const removeItems = (productKey) => {
        console.log("remove clicked", productKey)
        const newCart = cart.filter(pd => pd.key !== productKey);
        console.log(newCart);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        // cart data
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const findProductKeys = fakeData.find(productKey => productKey.key === key);
            findProductKeys.quantity = savedCart[key];
            console.log(findProductKeys);
            return findProductKeys;

        })
        setCart(cartProducts);

    }, [])
    let happyImageSet;
    if (orderPlaced === true) {
        happyImageSet = <img src={happyImage} />
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    happyImageSet
                }

                {
                    cart.map(pd => <ReviewItem product={pd} removeItem={removeItems} key={pd.key}></ReviewItem>)
                }
                {
                    cart.length === 0 && <h1>you have to shop!. <a href="/shop">keep shopping..</a></h1>
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="ship">
                        {
                            auth.user ? <button className="main-button">Proceed Checkout</button> :
                                <button className="main-button">login to Checkout</button>
                        }
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;