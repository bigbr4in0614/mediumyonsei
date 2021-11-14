import './style.css';
import mainlogo from '../assets/logo/big/white.png';
import { BiMenu } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Topnav() {
  const location = useLocation()
  return (
    <div className="topnav">
      <img class="logo" src={mainlogo} />
      <BiMenu className="menuicon" size="2em"/>
      
        <div class="navgroup">
          <Link class={location.pathname==='/' ? 'active' : null} to='/'> About </Link>
          <Link class={location.pathname==='/instruction' ? 'active' : null} to="/instruction">Instruction</Link>
          <Link class={location.pathname==='/playground' ? 'active' : null} to="/playground">Playground</Link>
          <a href="https://github.com/bigbr4in0614/hate-speech-detection" target="_blank">Github</a>
      </div>
    </div>
  );
}

export default Topnav;