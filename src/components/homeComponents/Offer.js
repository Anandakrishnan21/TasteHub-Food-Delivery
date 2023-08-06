import React from "react";
import CountDown from "./CountDown";

function Offer() {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white justify-center items-center">
      <div className="w-full lg:w-1/2 h-80 flex flex-col items-center justify-center gap-y-3 text-center">
        <p className="text-3xl">Delicious burgers are at an affordable price</p>
        <p>Mouthwatering burgers, budget-friendly prices. Unbeatable taste and inviting ambiance. Satisfaction guaranteed. Come indulge now!</p>
        <p className="text-5xl text-red-600 font-semibold"><CountDown /></p>
        <button className="bg-amber-500 p-2 w-36 rounded text-xl">Order Now</button>
      </div>
      <div className=" lg:w-1/2 h-96 flex justify-center items-center p-4">
        <img
          src="https://images.pexels.com/photos/4728849/pexels-photo-4728849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className="object-cover w-screen h-80 rounded"
        />
      </div>
    </div>
  );
}

export default Offer;
