import React from "react";
import {
  MdLocationOn,
  MdOutlineAddIcCall,
  MdOutlineWatchLater,
} from "react-icons/md";

const Information = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-28 mb-20  rounded-md py-20 px-4">
      <div
        style={{ backgroundColor: "#07332F" }}
        className="h-40 w-96  p-10 rounded-xl flex justify-center gap-5"
      >
        <div>
          <span>
            <MdOutlineWatchLater className="text-4xl text-gray-300"></MdOutlineWatchLater>
          </span>
        </div>
        <div>
          <h2 className="text-white font-bold">Opening Hours</h2>
          <p className="text-gray-300">Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#F7A582" }}
        className="h-40 w-96  p-10 rounded-xl flex justify-center gap-5"
      >
        <div>
          <span>
            <MdLocationOn className="text-4xl text-gray-300"></MdLocationOn>
          </span>
        </div>
        <div>
          <h2 className="text-white font-bold">Our Locations</h2>
          <p className="text-gray-300">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#07332F" }}
        className="h-40 w-96  p-10 rounded-xl flex justify-center gap-5"
      >
        <div>
          <span>
            <MdOutlineAddIcCall className="text-4xl text-gray-300"></MdOutlineAddIcCall>
          </span>
        </div>
        <div>
          <h2 className="text-white font-bold">Contact Us</h2>
          <p className="text-gray-300">
            +88 01750 00 00 00
            <br />
            +88 01750 00 00 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
