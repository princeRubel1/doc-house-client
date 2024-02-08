import React, { useEffect, useState } from "react";
import ExpertDocCart from "./ExpertDocCart";
import { AwesomeButton } from "react-awesome-button";
// import useDoctor from "../../../Hooks/useDoctor";

const ExpertDoc = () => {
  // const [doctors] = useDoctor();
  const [doctors, setDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch initial data from backend when component mounts
    fetch("http://localhost:4000/doctors?limit=3") // Send a query parameter to limit the initial number of doctors
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleShowMore = () => {
    // Fetch all data when "Show More" button is clicked
    fetch("http://localhost:4000/doctors")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
        setShowAll(true);
      })
      .catch((error) => console.error("Error fetching data", error));
  };
  return (
    <div>
      <div className=" md:space-y-3">
        <h2 className="text-2xl font-bold text-center">Our Expert Doctors</h2>
        <p className="text-xl w-full md:p-0 p-5 md:text-center text-justify md:w-2/3 mx-auto">
          Our team of expert doctors comprises highly skilled professionals
          dedicated to providing exceptional medical care across various
          specialties. From cardiologists specializing in heart health to
          dermatologists offering advanced skin treatments
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-10 mb-10 md:pl-0 pl-5 mt-20">
        {doctors.map((doctor) => (
          <ExpertDocCart key={doctor._id} doctor={doctor}></ExpertDocCart>
        ))}
      </div>

      <div className="text-center mb-10">
        {!showAll && (
          <button
            className="btn btn-outline btn-secondary"
            onClick={handleShowMore}
          >
            Show More
            {/* <AwesomeButton type="secondary">Show More</AwesomeButton> */}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpertDoc;
