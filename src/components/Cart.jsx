import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

function Cart({ items }) {
  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-black text-center mb-8">
          🛒 Your Luxury Cart
        </h1>
        {items.length > 0 ? (
          <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-4 px-6 text-left">Item</th>
                <th className="py-4 px-6 text-left">Quantity</th>
                <th className="py-4 px-6 text-left">Price</th>
                <th className="py-4 px-6 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-6">{item.name}</td>
                  <td className="py-4 px-6">{item.quantity}</td>
                  <td className="py-4 px-6">${item.price.toFixed(2)}</td>
                  <td className="py-4 px-6">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600 mt-8">
            Your cart is empty. Start adding luxurious items! 🛍️
          </p>
        )}
        <p className="text-2xl font-bold text-right mt-8">
          Total: ${totalCost.toFixed(2)}
        </p>
        <button className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800 transition shadow-lg">
          Place Order ✨
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
