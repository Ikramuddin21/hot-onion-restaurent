import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext()

export const AuthContextProvider = (props) =>{
    const auth = Auth();
    console.log(auth);
    return <AuthContext.Provider value={auth}></AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);

export const  PrivateRoute = ({ children, ...rest }) => {
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
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


const Auth = () => {
    const [user, setUser] = useState(null);

    const signUpUser = (name, email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res =>{
            setUser(signUpUser);
            return res.user;
        })
        .catch(err =>{
            console.log(err);
            setUser(null);
        })
    }

    const signInUser = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res =>{
            setUser(signInUser);
            return res.user;
        })
        .catch(err=>{
            setUser(null);
        })
    }

    const signOutUser = () =>{
        return firebase.auth().signOut().then(function() {
            setUser(null);
          }).catch(function(error) {
            console.log(error);
          });    
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              const currUser = user;
              setUser(currUser);
            } 
          });
    }, [])
    
    return {
        user,
        signUpUser,
        signInUser,
        signOutUser
    }
}

export default Auth;