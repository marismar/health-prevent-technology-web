import React from 'react';
import { Link } from 'react-router-dom';

import { RiUserLine } from 'react-icons/ri';
import { RiLockLine } from 'react-icons/ri';

import loginImg from '../../assets/images/login.svg';
import logoImg from '../../assets/images/logo-login.svg';

import './styles.css';

function Login() {
  return (
    <div id="login-page" className="container">
      <div className="login-content">
        {/* <strong>Welcome to</strong> */}
        <img src={logoImg} alt="Health Prevent Technology"/>
        <div className="input-container">
          <span>
            <RiUserLine size={40} color="#CBCBCB" />
          </span>
          <input type="email" placeholder="Email or username" />
        </div>
        <div className="input-container">
          <span>
            <RiLockLine size={40} color="#CBCBCB"/>
          </span>
          <input type="password" placeholder="Password"/>
        </div>
        
        <Link to={'/'} className="forgot-password-content">
          <span>Do you forgot your password?</span>
        </Link>
        <Link to={'/home'} type="text" className="button-container">
          Login
        </Link>
      </div>

      <div className="hero-content">
        <img src={loginImg} alt="Página de login"/>
      </div>
    </div>
  );
}

export default Login;