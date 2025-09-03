import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center bg-green-gradient lg:px-7 lg:py-4 px-4 py-2 lg:rounded-[10px_20px] rounded-[5px_10px] cursor-pointer font-publicSans lg:text-xl md:text-base text-sm text-font font-medium"
    >
      Edit Profile
    </button>
  );
};

export default Button;
