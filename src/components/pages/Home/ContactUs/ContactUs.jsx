import React from "react";
import "./ContactUs.css";
import { MdLocationOn, MdOutlineAddIcCall } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="backImg md:p-20 p-5 md:rounded-xl mb-12">
      <h2 className="text-2xl text-white font-bold mb-10">Contact With Us</h2>
      <div className="flex md:flex-row flex-col">
        <div className=" md:w-2/5 md:mr-10 space-y-3">
          <p className="text-justify text-slate-200 font-semibold">
            Have a question or need to schedule an appointment? Contact our team
            today! Our friendly staff is here to assist you with any inquiries
            you may have. Whether it's regarding our services, appointment
            availability, or general information, we're just a phone call or
            message away.{" "}
          </p>
          <span className="flex text-slate-200 items-center">
            <MdOutlineAddIcCall className="text-2xl mr-2 text-gray-300"></MdOutlineAddIcCall>
            +88 01750 14 14 14
          </span>
          <span className="flex text-slate-200 items-center ">
            <MdLocationOn className="text-2xl mr-2  text-gray-300"></MdLocationOn>
            Dhanmondi, Dhaka, Bangladesh
          </span>
        </div>
        <div className="md:w-11/12">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <label className="form-control w-full mt-6 md:mt-0 max-w-md">
              <div className="label">
                <span className="label-text text-xl text-white">
                  What is your name?
                </span>
              </div>
              <input
                type="text"
                placeholder="Please write  name"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text text-xl text-white">
                  What is your email?
                </span>
              </div>
              <input
                type="text"
                placeholder="Please write  email"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text text-xl text-white">
                  What is your number?
                </span>
              </div>
              <input
                type="text"
                placeholder="Please write number"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text text-xl text-white">
                  What is your doctor name?
                </span>
              </div>
              <input
                type="text"
                placeholder="Please write doctor name"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text text-xl text-white">
                  What is your date?
                </span>
              </div>
              <input
                type="date"
                placeholder="Please write date"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text text-xl text-white">
                  What is your time?
                </span>
              </div>
              <input
                type="time"
                placeholder="Please write time"
                className="input input-bordered w-full max-w-md"
              />
            </label>
          </div>
          <button
            style={{ backgroundColor: "#F7A482" }}
            className="px-8 py-3 mt-5 rounded-md w-full text-white "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
