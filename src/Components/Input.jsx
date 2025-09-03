import React from "react";

const Input = ({ html, title, value, type, onChange, name, placeholder }) => {
  return (
    <div className="flex gap-3 justify-start items-start flex-col lg:w-[400px] w-full">
      <label
        htmlFor={html}
        className="w-full font-publicSans text-white text-sm font-medium"
      >
        {title}
      </label>
      <input
        value={value}
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="w-full px-3 py-4   bg-box  rounded-md focus:outline-none focus:ring-2 focus:ring-greeny placeholder:text-sm placeholder:font-publicSans placeholder:text-textShade"
      />
    </div>
  );
};

export default Input;
