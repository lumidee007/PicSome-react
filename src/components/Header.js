import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  const { cartItems } = useContext(Context);

  const CartIcon =
    cartItems.length > 0 ? (
      <ShoppingCartIcon fontSize="large" />
    ) : (
      <ShoppingCartOutlinedIcon fontSize="large" />
    );

  const count = cartItems.length > 0 ? cartItems.length : null;

  return (
    <header>
      <Link to="/">
        {" "}
        <h2> PicSome </h2>
      </Link>
      <Link to="/cart" className="cart-icon">
        {" "}
        {CartIcon} <span className="cartCount"> {count} </span>{" "}
      </Link>
    </header>
  );
}

export default Header;
