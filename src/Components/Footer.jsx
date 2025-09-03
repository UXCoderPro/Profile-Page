import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full py-2 flex flex-wrap gap-4 justify-start items-center">
      <div className="text-white bg-white h-0.5 rounded-full lg:w-28 w-full" />
      <p className="text-white text-center font-publicSans text-sm lg:text-base">
        © {year} Abdul Aziz V I. Designed to delight, developed to perform.
      </p>
    </div>
  );
};

export default Footer;
