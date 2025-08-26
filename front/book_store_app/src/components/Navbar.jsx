import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoBookSharp } from "react-icons/io5";
import {HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import avatarImg from "../assets/avatar.png"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const navigation=[
  {name:"Dashboard", href:"/dashboard"},
  {name:"Orders", href:"/cart"},
  {name:"Check-out", href:"/checkout"},
  {name:"New SignIn",href:"/"}
]
const Navbar = () => {
 
  const [isDropdownOpen,setisDropdownOpen]=useState(false)
  const currentuser=true

  //for searching while inputing
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleButtonClick = () => {
  // Navigate to "/display" and pass the input value as state
    navigate("/search", { state: { inputValue } });
  };

  // for showing the adding cart items
  const cartItems=useSelector(state=> state.cart.cartItems)
  console.log(cartItems)

  return (
    <>
    <header className="max-w-screen-1xl mx-auto px-4 py-6 bg-black bg-opacity-70 text-white shadow-lg relative z-50"
    >
  <nav className="flex justify-center items-center gap-12">
    {/* Left */}
    <div className="flex items-center md:gap-16 gap-4">
      <Link to="/home">
        < IoBookSharp className="size-6 text-red-400 hover:text-red-500 transition duration-300" />
      </Link>

      {/* Search */}
      <div className="relative sm:w-72 w-40 bg-[#bb1a1a] rounded-md shadow-md">
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search here"
    className="w-full bg-transparent text-white py-2 px-4 pr-16 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 rounded-md"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />

  {/* Search Button */}
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#bb1a1a] text-white py-1 px-4 rounded-md hover:from-red-600 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
    onClick={handleButtonClick}
  >
   Click
  </button>
</div>

    </div>

    {/* Right */}
    <div className="relative flex items-center md:space-x-3 space-x-2">
      <div>
        {currentuser ? (
          <>
            <button onClick={() => setisDropdownOpen(!isDropdownOpen)}>
              <img
                src={avatarImg}
                alt=""
                className={`size-7 rounded-full ${
                  currentuser ? "ring-2 ring-red-500" : ""
                } shadow-md`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1A1A1A] shadow-lg rounded-md z-50 border border-gray-700">
                <ul className="py-2">
                  {navigation.map((navItem) => (
                    <li
                      key={navItem.name}
                      onClick={() => setisDropdownOpen(false)}
                    >
                      <Link
                        to={navItem.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-red-500 hover:text-white transition duration-300"
                      >
                        {navItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <HiOutlineUser className="size-6 text-white hover:text-red-500 transition duration-300" />
          </Link>
        )}
      </div>

      <button className="hidden sm:block hover:text-red-500 transition duration-300">
        <HiOutlineHeart className="size-6 text-white  hover:text-red-500" />
      </button>

      <Link
        to="/cart"
        className="bg-gradient-to-r from-red-500 to-red-700 text-white p-1 sm:px-6 px-2 flex items-center rounded-md shadow-md hover:shadow-red-500/50 transition duration-300"
      >
        <HiOutlineShoppingCart />
        {cartItems.length === 0 ? (
          <span className="text-sm font-semibold sm:ml-1">0</span>
        ) : (
          <span className="text-sm font-semibold sm:ml-1">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  </nav>
</header>

  </>
  )
}

export default Navbar;
