import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./actions/cartActions";
import data from "../public/data/data.json";

export function Item({ id, name, description, price, image }) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log({ id, name, description, price, image });

    setCount(count + 1);
    dispatch(addToCart({ id, name, description, price, image }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 flex flex-col items-center text-center">
      <img
        className="w-[180px] h-[180px] object-cover rounded-full border-4 border-gold-400 mb-4"
        src={image}
        alt={name}
      />
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{name}</h2>
      <p className="text-gray-600 italic mb-2">{description}</p>
      <p className="text-gold-500 font-semibold text-lg mb-4">${price}</p>
      <button
        className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-4 rounded-full transition mt-2 shadow-md"
        onClick={handleAddToCart}
      >
        Add to Cart ✨
      </button>
      <p className="mt-2 text-gray-500">Added: {count}</p>
    </div>
  );
}

function ItemList() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {data.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
