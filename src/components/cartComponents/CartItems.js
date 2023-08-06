import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "./CartItem";

function CartItems() {
  const { cartItems } = useShoppingCart();

  return (
    <div className="bg-rose-100 w-11/12 flex items-center flex-col rounded gap-2 p-2">
      <h1 className="font-semibold text-xl">My Cart</h1>
      <div className="w-full flex gap-3 flex-col">
        {cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity} />
        ))}
      </div>
        <button className="bg-amber-300 text-xl font-semibold w-11/12 h-10 rounded ease-in-out duration-300 hover:bg-amber-400">
          Place Order
        </button>
    </div>
  );
}

export default CartItems;
