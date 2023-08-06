import React from "react";

function LocationForm() {
  return (
    <>
      <div className="bg-rose-100 flex flex-col justify-start lg:items-center gap-3 w-11/12 rounded">
        <form className="w-full h-full p-2 flex flex-col gap-2">
          <p className="font-semibold text-2xl">Delivery Address</p>
          <div className="w-full h-full flex flex-col gap-3">
            <div className="w-full h-10">
              <input
                type="text"
                placeholder="CEP"
                className="w-4/12 h-10 p-2 rounded"
              />
            </div>
            <div className="w-full h-10">
              <input
                type="text"
                placeholder="House No"
                className="w-4/12 h-10 p-2 rounded"
              />
            </div>
            <div className="w-full h-10 flex flex-row gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 h-10 p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 h-10 p-2 rounded"
              />
            </div>
            <div className="w-full h-10 flex flex-row gap-3">
              <input
                type="text"
                placeholder="Address"
                className="w-4/12 h-10 p-2 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-4/12 h-10 p-2 rounded"
              />
              <input
                type="text"
                placeholder="District"
                className="w-4/12 h-10 p-2 rounded"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LocationForm;
