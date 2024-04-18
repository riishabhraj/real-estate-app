import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <a className="text-slate-500 text-xl font-bold">Realtor</a>
          <a className="text-slate-800 text-xl font-bold">Express</a>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent focus:outline-none w-24 sm:w-64 pr-1"
            placeholder="Search..."
          />
          <button>
            <FaSearch className="text-slate-500" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sign-in">sign in</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
