import React from "react";

const Drop = ({
  html,
  title,
  value,
  onChange,
  name,
  placeholder,

  opt1,
  opt2,
  opt3,
}) => {
  return (
    <div className="flex gap-3 justify-start items-start flex-col  lg:w-[400px] w-full">
      <label
        htmlFor={html}
        className="w-full font-publicSans text-white text-sm font-medium"
      >
        {title}
      </label>
      <div className="relative w-full">
        <select
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className="w-full px-3 py-4 appearance-none   bg-box  rounded-md focus:outline-none focus:ring-2 focus:ring-greeny placeholder:text-sm placeholder:font-publicSans placeholder:text-textShade"
        >
          <option className="bg-box py-2 border  border-solid h-auto border-stroke rounded-md font-amiri">
            {opt1}
          </option>
          <option className="bg-box py-2 border border-solid h-auto border-stroke rounded-md font-amiri">
            {opt2}
          </option>
          <option className="bg-box py-2 border border-solid h-auto border-stroke rounded-md font-amiri">
            {opt3}
          </option>
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white text-xl">
          ▼
        </span>
      </div>
    </div>
  );
};

export default Drop;
