import React from "react";
import { NavLink } from "react-router-dom";
import { IoBagOutline, IoHomeOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header className="flex justify-between p-2 px-4 top-0 sticky bg-white border-[1px] border-neutral-200 z-10">
      <div>
        <h1 className="text-lg font-bold text-blue-900">Shopping Mart</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/">
              <IoHomeOutline size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <IoBagOutline size={20} />
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
