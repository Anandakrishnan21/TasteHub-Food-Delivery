import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Product } from "../../utils/Constants";

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const item = Product.find((i) => i.id === id);
  if (!item) return null;

  return (
    <>
      <div className="w-full flex flex-row items-center justify-around md:justify-center gap-2">
        <img src={item.img} alt={item.title} className="w-12 h-12" />
        <div className="flex flex-row gap-2 w-4/12 items-center justify-center">
          <div className="flex flex-row gap-2 justify-center items-center">
            <p className="font-semibold">{item.title}</p>
            {""}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                X{quantity}
              </span>
            )}
          </div>
          <div>{item.price}</div>
        </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-rose-600 text-white flex justify-center items-center p-2 text-xl"
          >
            &times;
          </button>
      </div>
    </>
  );
}

export default CartItem;
