import React from "react";
import logo from "../../../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-40 py-10">
      <div>
        <footer className="footer p-10  md:max-w-screen-2xl mx-auto text-base-content">
          <aside>
            <img src={logo} className="h-12" alt="" />
            <p className="md:w-[450px] font-semibold text-slate-100 mt-4">
              Doctor House is your trusted online platform connecting patients
              with top-notch healthcare providers. With an extensive network of
              skilled doctors spanning various specialties, we make it easy for
              individuals to find the right healthcare professional for their
              needs.
            </p>
          </aside>
          <nav className="text-slate-100 font-semibold">
            <h6 className=" font-bold text-2xl  text-white">Quick Links</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">Doctors</a>
            <a className="link link-hover">Departments</a>
            <a className="link link-hover">Online Payment</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">My Account</a>
          </nav>
          <nav className="text-slate-100 font-semibold">
            <h6 className="font-bold text-2xl text-white">
              Doc House Services
            </h6>
            <a className="link link-hover">Pediatric Clinic</a>
            <a className="link link-hover">Diagnosis Clinic</a>
            <a className="link link-hover">Cardiac Clinic</a>
            <a className="link link-hover">Laboratory Analysis</a>
            <a className="link link-hover">Gynecological Clinic</a>
            <a className="link link-hover">Personal Counseling</a>
            <a className="link link-hover">Dental Clinic</a>
          </nav>
          <nav className="text-slate-100 font-semibold">
            <h6 className="font-bold text-2xl text-white">Working Hours</h6>
            <a className="link link-hover">Monday - 10 am to 7 pm</a>
            <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
            <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
            <a className="link link-hover">Thursday - 10 am to 7 pm</a>
            <a className="link link-hover">Friday - 10 am to 7 pm</a>
            <a className="link link-hover">Saturday - 10 am to 7 pm</a>
            <a className="link link-hover">Sunday - 10 am to 7 pm</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
