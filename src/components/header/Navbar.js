import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../../CSS/style.css";
import { Menu, X } from "lucide-react";
import { useShoppingCart } from "../../context/ShoppingCartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartQuantity } = useShoppingCart();

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full sticky top-0 z-[1] p-2 bg-rose-400 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        <div className="text-2xl font-semibold flex flex-row items-center gap-2">
          <img
            src="https://cdn2.iconfinder.com/data/icons/quarantine-4/64/food_delivery_scooter_motorcycle_transportation0-512.png"
            alt=""
            className="w-12 h-10"
          />
          <p>TasteHub</p>
        </div>
        <Nav className=" hidden md:block">
          <ul className="list-none flex space-x-5 text-2xl">
            <li>
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
            </li>
            <li>
              <Nav.Link as={NavLink} to="/menu">
                Menu
              </Nav.Link>
            </li>
            <li className="flex gap-1">
              <Nav.Link as={NavLink} to="/cart">
                Cart
              </Nav.Link>
              {cartQuantity >= 1 && (
                <span className="text-sm bg-white text-black p-2 rounded">
                  {cartQuantity}
                </span>
              )}
            </li>
          </ul>
        </Nav>
        <div className="flex md:hidden">
          <button onClick={toggleButton}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="p-2 md:hidden">
          <Nav className="w-full">
            <ul className="list-none flex flex-col space-y-5 text-lg">
              <li>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="/menu">
                  Menu
                </Nav.Link>
              </li>
              <li className="flex gap-1">
                <Nav.Link as={NavLink} to="/cart">
                  Cart
                  {cartQuantity >= 1 && (
                    <span className="text-sm bg-white text-black p-2 rounded">
                      {cartQuantity}
                    </span>
                  )}
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
