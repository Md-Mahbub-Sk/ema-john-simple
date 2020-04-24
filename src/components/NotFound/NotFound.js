import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
    return (
        <div style={{textAlign:"center",color:"red"}}>
            <p style={{fontSize:"50px", color:"black"}}><FontAwesomeIcon icon={faSadTear}/></p>
            <h1>The page is not found!!! Please check your path or url....</h1>
            <h3>404 Error!!</h3>
        </div>
    );
};

export default NotFound;