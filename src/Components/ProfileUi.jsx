import React from "react";
import Details from "./Details";

const ProfileUi = ({ profile }) => {
  return (
    <div className="flex justify-start flex-wrap items-center gap-10 ">
      <div className="flex flex-col justify-center items-center gap-12  bg-box lg:px-20 px-4 lg:w-auto w-full py-6 border-2 border-solid border-border rounded-3xl ">
        <div className="flex flex-col justify-center items-center mt-10 gap-3">
          <h1 className="font-amiri text-white font-bold text-4xl">
            {profile.name}
          </h1>
          <p className="font-publicSans text-lg font-medium uppercase text-greeny">
            Premium User
          </p>
        </div>

        <div className="lg:w-[436px] lg:h-[436px] w-80 h-80 rounded-full flex justify-center items-center bg-shade">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full rounded-full lg:p-14 p-8"
          />
        </div>
      </div>
      <div className="flex-col flex justify-start items-start gap-6 lg:p-10 p-4 bg-box border-2 border-solid border-border rounded-3xl lg:w-3/5 w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white font-publicSans font-semibold text-lg">
            Bio & Other Details
          </h1>
          <div className="flex justify-center items-center w-5 h-5 bg-greenLight rounded-full">
            <div className="p-1 bg-greeny rounded-full"></div>
          </div>
        </div>
        <Details
          header1="My Role"
          header2="Experience Level"
          answer1={profile.role}
          answer2={profile.experience}
        />
        <Details
          header1="My Favourite Company"
          header2="Advanced in Position"
          answer1={profile.company}
          answer2={profile.position}
        />
        <Details
          header1="Best Skilled Software"
          header2="Preferred Working Time"
          answer1={profile.software}
          answer2={profile.workTime}
        />
        <Details
          header1="My City"
          header2="Available For"
          answer1={profile.city}
          answer2={profile.availability}
        />
        <Details
          header1="My Gender"
          header2="Tags"
          answer1={profile.gender}
          answer2={profile.tags}
        />
      </div>
      <div className="w-full border-2 border-solid border-border gap-11 bg-box flex flex-col items-start justify-center lg:p-10 p-4 rounded-3xl">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white font-publicSans font-semibold text-lg">
            Overview & About
          </h1>
          <div className="flex justify-center items-center w-5 h-5 bg-greenLight rounded-full">
            <div className="p-1 bg-greeny rounded-full"></div>
          </div>
        </div>
        <div className="flex w-full flex-wrap  justify-between items-center">
          <div className="flex flex-col items-center justify-start  flex-wrap  w-full gap-3 px-0 py-3 border-b border-b-border border-solid ">
            <p className="w-full text-textShade font-publicSans text-base font-normal">
              Overview
            </p>
            <h1 className="w-full font-medium text-white font-publicSans text-lg">
              {profile.overview}
            </h1>
          </div>

          <div className="flex flex-col items-center justify-start  flex-wrap  w-full gap-3 px-0 py-3 border-b border-b-border border-solid ">
            <p className="w-full text-textShade font-publicSans text-base font-normal">
              About Me
            </p>
            <h1 className="w-full font-medium text-white font-publicSans text-lg">
              {profile.about}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUi;
