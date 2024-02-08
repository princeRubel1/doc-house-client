import React from "react";
import "./BannerTitle.css";

const BannerTitle = ({ heading, subHeading }) => {
  return (
    <div className="banner  h-[600px]">
      <div className="  space-y-2 mb-20">
        <div className="pt-60  text-center">
          <p style={{ fontStyle: "italic" }} className=" text-white text-xl">
            {subHeading}
          </p>
          <h2 className=" text-3xl font-semibold text-white  py-2">
            {heading}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
