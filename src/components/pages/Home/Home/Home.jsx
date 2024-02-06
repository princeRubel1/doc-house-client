import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Information from "../Information/Information";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="max-w-screen-2xl  mx-auto">
        <Services></Services>
        <Information></Information>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
