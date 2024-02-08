import { Rating } from "@smastrom/react-rating";
import React from "react";
import "@smastrom/react-rating/style.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const ExpertDocCart = ({ doctor }) => {
  const {
    _id,
    doctorName,
    image_url,
    specialist,
    rating,
    location,
    businessHour,
    fees,
  } = doctor;
  return (
    <div>
      <div className="card md:w-[450px] w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-96 md:rounded-md" src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{doctorName}</h2>
          <h5>{specialist}</h5>
          <p>
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
          </p>
          <hr className="my-2" />
          <div className="space-y-4">
            <p className="flex  items-center">
              <IoLocationOutline className="text-2xl mr-2" />
              {location}
            </p>
            <p className="flex items-center">
              <MdEventAvailable className="text-2xl mr-2" />
              {businessHour}
            </p>
            <p className="flex items-center">
              <LuCircleDollarSign className="text-2xl mr-2" />
              {fees}
            </p>
          </div>
          <div className="card-actions mt-4">
            <Link to={`detailsprofile/${_id}`}>
              <button className="btn btn-outline btn-primary w-full">
                View Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDocCart;
