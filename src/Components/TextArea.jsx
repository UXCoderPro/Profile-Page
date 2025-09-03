import React from "react";

const TextArea = ({ html, title, onChange, name, value }) => {
  return (
    <div className="flex gap-3 justify-start items-start flex-col  lg:w-[400px] w-full">
      <label
        htmlFor={html}
        className="w-full font-publicSans text-white text-sm font-medium"
      >
        {title}
      </label>
      <textarea
        onChange={onChange}
        value={value}
        rows="5"
        name={name}
        placeholder="Write Something..."
        className="w-full px-3 py-4  resize-none bg-box overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-greeny placeholder:text-sm placeholder:font-publicSans placeholder:text-textShade"
      />
    </div>
  );
};

export default TextArea;
