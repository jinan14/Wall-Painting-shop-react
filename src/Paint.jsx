import React, { useState } from 'react';
import { useStore } from './store';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Paint() {
    const [color, setColor] = useState("#FFFFFF");
    const [quantity, setQuantity] = useState(1);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { cart, addToCart, removeFromCart, clearCart } = useStore();

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleAddToCart = () => {
        addToCart(color, quantity);
        setQuantity(1); // Reset quantity after adding to cart
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);
     //Starts with an initial total of 0
     //Goes through each item in the cart
     //Adds the price of each item to the total
     //Ends with the total price of all items in the cart

    const toggleCartVisibility = () => {
        setIsCartVisible((prev) => !prev);
    };

    const handlePurchase = () => {
        alert('Thank you for your purchase');
        clearCart(); // Clear the cart after purchase
    };
    return (
        <div className="flex flex-col p-4 items-center">
          {/* Header Section */}
          <div className="flex flex-wrap items-center w-full justify-around">
            <h1 className="m-12 text-2xl sm:text-4xl font-bold text-orange-100 text-center">
              Customize Your Color:
            </h1>
            <p
              className="text-2xl sm:text-3xl cursor-pointer"
              onClick={toggleCartVisibility}
            >
              <FaCartShopping />
            </p>
          </div>
      
          {/* Main Content Section */}
          <div className="flex flex-wrap w-full justify-center lg:justify-between">
            {/* Color Picker Section */}
            <div className="flex flex-col items-center w-full lg:w-[50%]">
              <div className="flex flex-col items-center w-full md:w-[70%] lg:w-[50%]">
                <div
                  className="color-display w-60 h-60 sm:w-80 sm:h-80 p-5 flex justify-center items-center rounded-3xl mb-6 border border-gray-500"
                  style={{ backgroundColor: color }}
                >
                  <p className="text-gray-900 text-lg sm:text-2xl font-bold text-center">
                    Selected Color: <br /> {color}
                  </p>
                </div>
                <h1 className="font-bold mb-4 text-center">Wall Paint 3kg</h1>
                <input
                  className="w-60 sm:w-72 h-14 p-1 rounded-xl border-2 border-gray-400"
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                />
      
                <div className="flex items-center mt-5">
                  <button
                    onClick={decrementQuantity}
                    className="bg-gray-700 w-8 h-8 text-white p-2 rounded-full"
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-4 text-xl sm:text-2xl">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="bg-gray-700 w-8 h-8 text-white p-2 rounded-full"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
      
              <div className="mt-5">
                <p className="text-center mb-5 font-bold text-2xl sm:text-3xl">
                  ${quantity * 20}
                </p>
                <button
                  onClick={handleAddToCart}
                  className="bg-gray-800 text-white font-bold p-3 rounded-3xl w-48 sm:w-60"
                >
                  Add to Cart
                </button>
              </div>
            </div>
      
            {/* Cart Section */}
            {isCartVisible && (
              <div className="mt-10 w-full lg:w-[50%] backdrop-blur-xl flex flex-col p-5">
                <h2 className="text-2xl text-gray-200 sm:text-gray-800 sm:text-3xl font-bold text-center">
                  Cart Items
                </h2>
                {cart.length === 0 ? (
                  <p className="text-center font-semibold">Your cart is empty</p>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap justify-between  text-gray-100 sm:text-gray-800 p-2 border-b"
                    >
                      <span>{item.color} - Quantity: {item.quantity}</span>
                      <span className='text-gray-800 font-semibold'>
                        Price: ${item.price} | Total: ${item.totalPrice}
                      </span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="bg-red-500 text-white  p-1 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
                <h3 className="text-lg sm:text-xl font-bold mt-4 text-white sm:text-gray-800">
                  Total Price: ${totalPrice}
                </h3>
                <button
                  className="bg-gray-800 text-white mt-6 font-bold p-3 rounded-3xl w-48 sm:w-60"
                  onClick={handlePurchase}
                >
                  Purchase
                </button>
              </div>
            )}
          </div>
        </div>
      );
      
}

export default Paint;
