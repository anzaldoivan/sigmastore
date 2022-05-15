import React from "react";
import { items } from "../components/data/items";

export default React.createContext({
  items,
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
