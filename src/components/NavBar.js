"use client"
import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  // start mobile first plus facile
  return (
    <nav className="fixed top-0 w-full bg-slate-500 items-center flex p-4">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        <h1 className="text-xl text-black font-bold cursor-pointer md:hidden ">
          Aesop
        </h1>
        <div className=" flex justify-center items-center md:hidden space-x-6">
          <button className=" md:hidden ">
            <i className="fas fa-search text-white w-9 h-9 flex justify-center items-center hover:text-black"></i>
          </button>
          <button className=" md:hidden ">
            <i className="fas fa-heart text-white w-9 h-9 flex justify-center items-center hover:text-black"></i>
          </button>
          <span className="text-black font-bold cursor-pointer">Cart</span>

          <button className="flex justify-end md:hidden " onClick={showNav}>
            <i className="fas fa-bars text-white w-9 h-9 flex justify-center items-center hover:text-black"></i>
          </button>
        </div>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
            <p>Hello</p>
            <p>Hello</p>

            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>

          {/* {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link
                  className="hover:text-sky-500"
                //   to={link.href}
                //   onClick={showNav}
                >
                  {link.title}
                </Link>
              </li>
            );
          })} */}
        </ul>
        <button
          className={`${
            toggle ? " flex" : " hidden"
          } text-indigo-800 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-24`}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
