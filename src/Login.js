import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';

function Login() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase thing
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate('/');
            }) 
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase thing
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // It successfully created a new user with email and password
                if (auth ) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))  
    }

  return (
    <div className='login'>
      <Link to='/'>
        <img 
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form className='login__info'>
            <h5>E-mail</h5>            
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>            
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button className='login__signInButton' onClick={signIn}>Sign In</button>
        </form>

        <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
