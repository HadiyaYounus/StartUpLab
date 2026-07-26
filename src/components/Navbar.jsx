import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-white font-semibold"
      : "text-gray-400 hover:text-white transition";

  return (
    <nav className="bg-[#181818] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <NavLink
            to="/"
            className="text-2xl font-bold text-white"
          >
            Startup Lab
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 text-2xl"
          >
            ☰
          </button>

          <div className="hidden md:flex gap-8">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>

            <NavLink to="/startups" className={linkStyle}>
              StartUps
            </NavLink>

            <NavLink to="/favourites" className={linkStyle}>
              Favourites
            </NavLink>

            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
          </div>

        </div>


        {open && (
          <div className="md:hidden mt-5 flex flex-col gap-4">

            <NavLink 
              to="/"
              className={linkStyle}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink 
              to="/startups"
              className={linkStyle}
              onClick={() => setOpen(false)}
            >
              StartUps
            </NavLink>

            <NavLink 
              to="/favourites"
              className={linkStyle}
              onClick={() => setOpen(false)}
            >
              Favourites
            </NavLink>

            <NavLink 
              to="/about"
              className={linkStyle}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;