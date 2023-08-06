import React from "react";
import LocationForm from "../components/cartComponents/LocationForm";
import CartItems from "../components/cartComponents/CartItems";
import Payment from "../components/cartComponents/Payment";

function Cart() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center mt-12">
      <div className="w-full lg:w-3/5 flex flex-col items-center h-full gap-2">
        <LocationForm />
        <Payment />
      </div>
      <div className="w-full lg:w-2/5 flex justify-center items-center lg:my-0 lg:mb-2 md:my-4">
        <CartItems />
      </div>
    </div>
  );
}

export default Cart;
