import React from "react";

const paymentMethod = [
  {
    id: "1",
    img: "https://cdn0.iconfinder.com/data/icons/shopping-and-ecommerce-30/32/Shopping_and_Ecommerce_creadit_card_debit-256.png",
    type: "Debit Card",
  },
  {
    id: "2",
    img: "https://cdn3.iconfinder.com/data/icons/building-89/64/Bank-256.png",
    type: "Bank Transfer",
  },
  {
    id: "3",
    img: "https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Money-512.png",
    type: "Cash On Delivery",
  },
];

function Payment() {
  return (
    <div className="w-11/12 h-2/6 md:h-1/5 lg:h-1/4 bg-rose-100 flex flex-col justify-start items-center rounded">
      <form className="w-full h-full p-2 flex flex-col gap-2">
        <p className="font-semibold text-2xl">Payment Method</p>
        <div className="w-full h-full flex flex-col md:flex-row justify-center lg:items-center gap-3">
          {paymentMethod.map((payment) => (
            <div key={payment.id} className="w-full lg:w-4/12 h-10">
              <button className="w-full h-full flex flex-row items-center justify-center gap-3 md:p-2 rounded bg-white text-slate-400">
                <img src={payment.img} alt="" className="w-6 h-6" />
                <p>{payment.type}</p>
              </button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Payment;
