import React from "react";
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import Footer from "../img/Footer.svg";

const FooterContainer = () => {
  return (
    <footer className=" w-full  text-white">
      <img src={Footer} className="w-full h-40 md:h-60  bg-cover" alt="" />
      <div className="flex items-center justify-center text-xl md:text-3xl gap-6 text-gray-400 mt-8">
        <FiFacebook /> <FiInstagram /> <FiTwitter /> <FiYoutube />
      </div>
      <div className="md:flex items-center justify-center text-md md:text-lg gap-4 text-gray-400 ">
        <p className="text-center md:text-none">
          Copyright © 2022 . All rights reserved.
        </p>
        <p className="text-center md:text-none">Terms · Privacy Policy</p>
      </div>
      <p className="flex items-center justify-center text-sm md:text-lg gap-4 text-gray-300 text-bolder">
        Designed & Developed by Neeraj Kumar
      </p>
    </footer>
  );
};

export default FooterContainer;
