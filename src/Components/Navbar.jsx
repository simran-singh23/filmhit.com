import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">filmy hit</h1>

        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "hover:text-red-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "hover:text-red-400"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold" : "hover:text-red-400"
            }
          >
            Contact
          </NavLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
         
          className="md:hidden text-2xl"
          
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col mt-4 gap-4 md:hidden">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
