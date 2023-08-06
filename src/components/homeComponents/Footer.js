import React from "react";
import Form from "./Form";

const data = [
  {
    id: "1",
    day: "Monday",
    time: "11:00am - 18:00pm",
  },
  {
    id: "2",
    day: "Tuesday",
    time: "11:00am - 18:00pm",
  },
  {
    id: "3",
    day: "Wednesday",
    time: "11:00am - 18:00pm",
  },
  {
    id: "4",
    day: "Thursday",
    time: "11:00am - 18:00pm",
  },
  {
    id: "5",
    day: "Friday",
    time: "11:00am - 18:00pm",
  },
  {
    id: "6",
    day: "Saturday",
    time: "11:00am - 18:00pm",
  },
  {
    id: "7",
    day: "Sunday",
    time: "Closed",
  },
];

const images = [
  {
    id: "1",
    img: "https://cdn2.iconfinder.com/data/icons/social-micon/512/linkedin-512.png",
  },
  {
    id: "2",
    img: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png",
  },
  {
    id: "3",
    img: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png",
  },
];

function Footer() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center md:flex-row lg:flex-row bg-rose-200 ">
      <div className="w-full h-full flex flex-col justify-around items-center gap-y-5" >
        <div className="w-full h-1/3 flex flex-col justify-center items-center">
          <p className="text-2xl font-semibold">Follow</p>
          <div className="w-full flex flex-row justify-center gap-x-3">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt=""
                className="w-10 h-10"
              />
            ))}
          </div>
        </div>
        <div className="w-full h-1/3 flex flex-col justify-center items-center ">
          <p className="text-2xl font-semibold">Address</p>
          <div>
            <p>123 Street</p>
            <p>abc,City</p>
          </div>
        </div>
        <div className="w-full h-1/3 flex flex-col justify-center items-center">
          <p className="text-2xl font-semibold">Contact</p>
          <div>
            <div className="flex flex-row">
              <span>Email:</span>
              <p className="font-semibold">tastehub21@gmail.com</p>
            </div>
            <div className="flex flex-row">
              <span>Phone:</span>
              <p className="font-semibold">+91 1234567890</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-around items-center gap-y-2 lg:gap-y-5">
        <p className="text-2xl font-semibold ">Working Hours</p>
        {data.map((item) => (
          <div key={item.id} className="w-full flex flex-row justify-center items-center gap-x-2">
            <div className="">
              <p className="font-semibold">{item.day}</p>
            </div>
            <div className="">
              <p>{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold">Contact Us</p>
        <Form />
      </div>
    </div>
  );
}

export default Footer;
