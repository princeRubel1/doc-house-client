import React from "react";
import BannerTitle from "../../Shared/BannerTitle/BannerTitle";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { IoLocationOutline } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { LuCircleDollarSign } from "react-icons/lu";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "./DetailsProfile.css";
import { GoDotFill } from "react-icons/go";

const DetailsProfile = () => {
  const doctors = useLoaderData();
  const {
    doctorName,
    image_url,
    specialist,
    rating,
    location,
    businessHour,
    fees,
    description,
    qualification,
  } = doctors;
  return (
    <div>
      <BannerTitle
        subHeading={"Home / Doctor Profile"}
        heading={"Doctor Profile"}
      ></BannerTitle>
      <div className="mt-10 mb-20 px-5 md:px-0 md:max-w-screen-lg  mx-auto">
        <div className="bg-white p-10  shadow-xl flex flex-col md:flex-row   ">
          <div>
            <img src={image_url} className="w-96 h-80 rounded-lg" alt="" />
          </div>
          <div className="md:ml-10 mt-5 md:mt-0 space-y-4">
            <h2 className="text-2xl font-bold">{doctorName}</h2>
            <p className="text-xl font-serif">{specialist}</p>
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
            <p className="flex  items-center text-xl">
              <IoLocationOutline className="text-2xl mr-2" />
              {location}
            </p>
            <p className="flex items-center text-xl">
              <MdEventAvailable className="text-2xl mr-2" />
              {businessHour}
            </p>
            <p className="flex items-center">
              <LuCircleDollarSign className="text-2xl mr-2" />
              {fees}
            </p>
            <button>
              <AwesomeButton type="secondary">Book Now</AwesomeButton>
            </button>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl mb-20 bg-white shadow-xl md:p-5   mx-auto">
        <Tabs>
          <TabList className="md:space-x-40 text-center md:font-bold md:text-xl md:border-b-2 py-2">
            <Tab>Overview</Tab>
            <Tab>Locations</Tab>
            <Tab>Reviews</Tab>
            <Tab>Business Hours</Tab>
          </TabList>

          <TabPanel>
            <div className="md:p-20 p-8 space-y-4">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p>{description}</p>
              <div className="flex flex-col md:flex-row md:gap-20">
                <div className="mt-5">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Education</h2>
                    <ul>
                      {doctors.qualification.map((qualification, i) => (
                        <li className="space-y-2 mb-4" key={i}>
                          <h2 className=" flex items-center  font-semibold">
                            {" "}
                            <GoDotFill className="mr-2"></GoDotFill>{" "}
                            {qualification.university}{" "}
                          </h2>
                          <div className="ml-8 space-y-2">
                            <p>{qualification.degree} </p>
                            <p>{qualification.year} </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Work & Experience
                    </h2>
                    <ul>
                      {doctors.workExperience.map((experience, i) => (
                        <li className="space-y-2 mb-4" key={i}>
                          <h2 className=" flex items-center  font-semibold">
                            {" "}
                            <GoDotFill className="mr-2"></GoDotFill>{" "}
                            {experience.hospital}{" "}
                          </h2>
                          <div className="ml-8 space-y-2">
                            <p>{experience.position} </p>
                            <p>{experience.years} </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Services</h2>
                    <ul>
                      {doctors.services.map((service, i) => (
                        <li className="space-y-2 mb-4" key={i}>
                          <p className="ml8 flex items-center">
                            {" "}
                            <GoDotFill className="mr-2"></GoDotFill> {service}{" "}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Awards</h2>
                    <ul>
                      {doctors.awards.map((award, i) => (
                        <li className="space-y-2 mb-4" key={i}>
                          <h2 className=" flex items-center ml-2 space-y-2">
                            {" "}
                            <GoDotFill className="mr-2"></GoDotFill> {award}{" "}
                          </h2>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Specializations</h2>
                    <h2 className=" flex items-center ml-2 space-y-2">
                      {" "}
                      <GoDotFill className="mr-2"></GoDotFill>
                      {specialist}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-20">
              <div className="md:p-10  md:max-w-screen-md text-center mx-auto">
                <div>
                  <h2 className="text-2xl font-bold mb-8">{location}</h2>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Work Place</h2>
                  <ul>
                    {doctors.workExperience.map((experience, i) => (
                      <li className="space-y-2 mb-4" key={i}>
                        <h2 className=" flex items-center justify-center  font-semibold">
                          {" "}
                          <GoDotFill className="mr-2"></GoDotFill>{" "}
                          {experience.hospital}{" "}
                        </h2>
                        <div className="ml-8 space-y-2">
                          <p>{experience.position} </p>
                          <p>{experience.years} </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-10 md:p-20 space-y-3 ">
              <h2 className="text-2xl font-bold text-center">
                Patients Review
              </h2>
              <div className="space-y-3">
                <div className="flex md:flex-row flex-col md:gap-10 gap-5">
                  <label className="form-control md:w-full max-w-xl">
                    <div className="label">
                      <span className="label-text text-xl font-serif">
                        What is your name?
                      </span>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Write your name"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control md:w-full max-w-xl">
                    <div className="label">
                      <span className="label-text text-xl font-serif">
                        What is your profession?
                      </span>
                    </div>
                    <input
                      type="text"
                      name="profession"
                      placeholder="Write your profession"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-xl font-serif">
                      Write your description
                    </span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Write here"
                    name="description"
                  ></textarea>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-xl font-serif">
                      Upload your photo
                    </span>
                  </div>
                  <input
                    type="file"
                    name="photo"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </label>
                <button className="pt-4">
                  <AwesomeButton type="secondary">Submit</AwesomeButton>
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="p-10 space-y-3">
              <h2 className="text-2xl font-bold">Business Hours</h2>
              <h2 className="text-xl font-serif">{businessHour}</h2>
              <h2 className="text-2xl font-bold">Saturday :</h2>

              <p className="text-xl font-serif">10:00 am - 2:00 pm</p>
              <h2 className="text-2xl font-bold">Sunday:</h2>

              <p className="text-xl font-serif">Closed</p>
              <p className="text-xl font-serif">
                Please note that these hours may vary on holidays or special
                occasions. For the most accurate information, please contact us
                directly.
              </p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailsProfile;
