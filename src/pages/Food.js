import React from "react";
import { useParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product } from "../utils/Constants";

function Food() {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  const { categoryName } = useParams();

  const categoryProducts = Product.filter(
    (product) => product.category.toLowerCase() === categoryName
  );

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:flex-row lg:flex-row md:flex-wrap">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 lg:w-1/3 hover:bg-rose-50 rounded"
          >
            {product.img && (
              <div className="w-48 h-48">
                <img
                  src={product.img}
                  alt=""
                  className="object-contain hover:rotate-12"
                />
              </div>
            )}
            <div className="w-full flex flex-col justify-center items-center text-center gap-y-1 text-xl">
              <p className="font-semibold">{product.title}</p>
              <p className="font-semibold">{product.price}</p>
              <div className="flex flex-row">
                <div className="flex flex-row bg-amber-100 h-full w-60 rounded justify-center items-center">
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-10 h-10 bg-slate-50 rounded ">
                      <button onClick={() => decreaseCartQuantity(product.id)} className="w-full h-full flex justify-center items-center">-</button>
                    </div>
                    <div className="w-12 h-10">
                      <span className="w-full h-full flex justify-center items-center font-semibold text-xl">{getItemQuantity(product.id)}</span>
                    </div>
                    <div className="w-10 h-10 bg-slate-50 rounded ">
                      <button onClick={() => increaseCartQuantity(product.id)} className="w-full h-full flex justify-center items-center">+</button>
                    </div>
                  </div>
                  <div>
                    <button className="p-2 text-rose-600 rounded">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/cart-alt-512.png"
                        alt=""
                        className="w-12 h-12"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Food;
