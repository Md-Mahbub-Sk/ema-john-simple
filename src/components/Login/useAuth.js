import React, { createContext, useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { Route, Redirect } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);


const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);

export const PrivetRouter = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: (location)
                            }}
                        />
                    )

            }
        />
    )
}







const getUser = user => {
    const { displayName, email, photoURL } = user;
    return {
        name: displayName,
        email: email,
        photo: photoURL
    }
}

const Auth = () => {
    const [user, setUser] = useState(null);
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .then(response => {

                setUser(getUser(response.user));
                return response.user;
            })
            .catch(error => {

                setUser(null);
                return error.massage
            })



    }
    const signOut = () => {
        return firebase.auth().signOut()
            .then(response => {
                setUser(null);
            })
            .catch(error => {

            })
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                setUser(getUser(user));
            } else {
                // No user is signed in.
            }
        });
    }, [])

    return {
        user,
        signInWithGoogle,
        signOut
    }

}
export default Auth;