import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <div className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="flex items-center">
          <span className="text-slate-500 text-xl font-bold">Realtor</span>
          <span className="text-slate-800 text-xl font-bold">Express</span>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center "
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-transparent focus:outline-none w-24 sm:w-64 pr-1"
            placeholder="Search..."
          />
          <button>
            <FaSearch className="text-slate-500" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to="/" className="text-slate-700 hover:underline">
            <li className="hidden sm:inline">Home</li>
          </Link>
          <Link to="/about" className="text-slate-700 hover:underline">
            <li className="hidden sm:inline">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-slate-700 hover:underline">Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
