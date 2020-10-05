import React, { useState } from 'react';
import {firebaseAuth} from '../firebase';
import {Redirect} from 'react-router-dom';
//import jwt_decode from 'jwt-decode';

// console.log("Welcome to user Profile");  
// const tokenUser =localStorage.usertoken;
// console.log("Checking for Token");
// const decoded = jwt_decode(tokenUser);
// console.log("Checking for User Value");
// console.log(decoded);

const Authenticated = (props) => {

    const [loggedIn, setloggedIn] = useState(null);
    //const [userLogIn, setuserLogIn] = useState(null);

    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          setloggedIn(true);
          console.log("Firebase Auth");
        } else {
          // User is signed out.
          setloggedIn(false);
        }
      });

      
      // this.setState({
      //   first_name: decoded.identity.first_name,
      //   last_name: decoded.identity.last_name,
      //   email: decoded.identity.email
      // })
      

      if(props.nonAuthenticated){
        if(loggedIn===null){
            return "Loading...";
          }
          else if(!loggedIn) {
            return props.children;
          }
          else if(loggedIn) {
            return <Redirect to="/Dashboard"/>;
          }
      }
      else{
        if(loggedIn===null){
            return "Loading...";
          }
          else if(loggedIn) {
            return props.children;
          }
          else if(!loggedIn) {
            return <Redirect to="/Login"/>;
          }
      }
};

export default Authenticated;
