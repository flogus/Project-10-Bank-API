import React from 'react';
import Logo from '../assets/argentBankLogo.png'

function Banner() {
    return (<nav className="main-nav">
    <a className="main-nav-logo" href="./index.html">
      <img
        src={Logo}
        className="main-nav-logo-image"
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
      <a className="main-nav-item" href="./sign-in.html">
        <i className="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
  </nav>);
}

export default Banner;
