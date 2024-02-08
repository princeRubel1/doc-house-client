import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Information from "../Information/Information";
import Testimonials from "../Testimonials/Testimonials";
import ExpertDoc from "../ExpertDoc/ExpertDoc";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="md:max-w-screen-2xl  mx-auto">
        <Services></Services>
        <Information></Information>
        <Testimonials></Testimonials>
        <ExpertDoc></ExpertDoc>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
