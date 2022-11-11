import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Orders from './Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import axios from './axios';

const promise = loadStripe(
  'pk_test_51LOHb9SJpOuXkVqllCpRdzSQyMdtVQ48UD7d58KMOWXyQsh3r6H5Gv36ZdQkLzBpX51jXKir3NkveeBGGgDMp41S00CTw6fBTg');


function App() {
  const [{basket}, dispatch] = useStateValue();


  useEffect(() => {
    //will run only once, when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if(authUser) {
        // the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user was logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM convention
    <Router>
      <div className="app">
        <Routes>
          <Route path='/orders'
            element={
              <Orders/>
            }
          />
          <Route path='/login' 
            element={ 
              <Login /> 
            } 
          />
          <Route path='/Signup' 
            element={ 
              <Login /> 
            } 
          />
          <Route path='/checkout' 
            element={
              <>
                <Header/>
                <Checkout />
              </>  
            } 
          />
          <Route path='/payment' 
            element={
              <>
                <Header/>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>  
            } 
          />
          <Route path='/' 
            element={
              <>
                <Header/>
                <Home />
              </>  
            } 
          />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
