import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import cartContext from "../context/cartContext";

import './styles/CartWidget.css';

const CartWidget = (props) => {
  return (
    <cartContext.Consumer>
      {context => (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="2x" color="black" />
      <div className="circle">{context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}</div>
    </div>
      )}
    </cartContext.Consumer>
  );
};

export default CartWidget;
