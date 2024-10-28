import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.length;

  const handleRemove = (name) => {
    dispatch(removeFromCart(name));
  };

  return (
    <header className="flex justify-between items-center bg-black text-white p-6">
      <div>
        <h1 className="text-3xl font-bold">Chic Jewelry 💎</h1>
      </div>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
