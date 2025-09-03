import React from "react";

const Details = ({ header1, answer1, header2, answer2 }) => {
  return (
    <div className="flex items-center justify-start lg:gap-12 flex-wrap w-full gap-6 px-0 py-3 border-b-border border-b border-solid">
      <div className="flex flex-col items-start justify-center gap-3 max-w-96 w-full">
        <p className="w-full text-textShade font-publicSans text-base font-normal">
          {header1}
        </p>
        <h1 className="w-full font-medium text-white font-publicSans text-lg">
          {answer1}
        </h1>
      </div>
      <div className="flex flex-col items-start justify-center gap-3 max-w-96">
        <p className="w-full text-textShade font-publicSans text-base font-normal">
          {header2}
        </p>
        <h1 className="w-full font-medium text-white font-publicSans text-lg">
          {answer2}
        </h1>
      </div>
    </div>
  );
};

export default Details;
