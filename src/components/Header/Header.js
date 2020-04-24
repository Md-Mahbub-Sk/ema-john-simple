import React from 'react';
import logo from "../../images/logo.png";
import './Header.css'
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';





const Header = () => {
  const auth = useAuth();



  return (
    <div className="header">
      <img src={logo} alt="" />


      <nav style={{ marginTop: "10px" }}>

        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory</a>
        {
          auth.user && <span style={{ color: "white" }}>{auth.user.name}</span>

        }
        {
          auth.user ? <a href="/login" style={{ color: "white" }}>sign out</a> :
            <a href="/login" style={{ color: "white" }}>sign in</a>

        }
      </nav>
    </div>
  );
};

export default Header;