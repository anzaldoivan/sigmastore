import React from 'react';
import {  Link } from "react-router-dom";
import CartWidget from './CartWidget';
const navbar= () =>{
  return (
  <div>
    <h1>SigmaStore</h1>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/">PC</Link>
    </li>
    <li>
      <Link to="/">Playstation</Link>
    </li>
    <li>
      <Link to="/">XBOX</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <CartWidget />
  </div>
  );
}
export default navbar;