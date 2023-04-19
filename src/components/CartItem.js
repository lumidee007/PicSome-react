import React, { useState, useContext } from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import { Context } from "../Context";

function CartItem({ item }) {
  const [hovered, setHovered] = useState(false);
  const { removeFromCart } = useContext(Context);

  const delIcon = hovered ? (
    <DeleteIcon className="del-icon" onClick={() => removeFromCart(item.id)} />
  ) : (
    <DeleteForeverOutlinedIcon className="del-icon" />
  );

  return (
    <div className="cart-item">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {delIcon}
      </div>
      <img alt={item.url} src={item.url} width="130px" />
      <p>$6.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
