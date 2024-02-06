import React from "react";
import "./Banner.css";
import banner from "../../../../assets/group-people.png";

const Banner = () => {
  return (
    <div className="banner-img h-[600px] ">
      <div className="flex flex-col md:flex-row items-center justify-center md:py-40 py-20 px-4 max-w-screen-2xl mx-auto">
        <div className="md:w-1/2 text-white md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Best Medical Help Center
          </h2>
          <p className="mb-6">
            Doctor House is your premier destination for comprehensive
            healthcare solutions. With a team of dedicated professionals, we
            provide top-notch medical services
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            All Service
          </button>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img className="w-full md:max-w-xs mx-auto" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
{
  /* <div className="max-w-md  mx-auto rounded-xl shadow-md overflow-hidden md:max-w-screen-2xl">
        <div className="md:flex">
          <div className=" p-8 sm:text-center title my-auto ">
            <h2 className="tracking-wide text-sm text-indigo-500 font-semibold">
              Your Best Medical Help Center
            </h2>
            <p className="block mt-1 text-lg leading-tight font-medium text-white ">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry’s stardard.
            </p>
            <button className="btn btn-warning">All Service</button>
          </div>
          <div>
            <img src={banner} alt="" />
          </div>
        </div>
      </div> */
}
