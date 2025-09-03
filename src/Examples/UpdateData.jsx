import React, { useState } from "react";

const UpdateData = () => {
  const [name, setName] = useState({ name: "Aziz", age: 25, city: "Tenkasi" });
  const handleChange = (event) => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  return (
    <div className="w-full flex flex-col gap-14 mt-32 justify-start items-center">
      <div className="flex justify-center items-center gap-6">
        <h1 className="font-medium text-gray-700 text-lg">
          Name: <span className="text-red-800"> {name.name} </span>
        </h1>
        <h1 className="font-medium text-gray-700 text-lg">
          Age: <span className="text-red-800"> {name.age} </span>
        </h1>
        <h1 className="font-medium text-gray-700 text-lg">
          City: <span className="text-red-800"> {name.city} </span>
        </h1>
      </div>

      <div className="w-full flex gap-4 justify-center items-start h-auto pb-3">
        <div className="flex flex-col gap-2 justify-start items-start w-96">
          <label className="font-semibold text-base">Name</label>
          <input
            type="text"
            value={name.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter your Name"
            className="py-4 px-3 border border-solid border-gray-400 rounded-2xl w-full"
          />
          <label className="font-semibold text-base">Age</label>
          <input
            type="number"
            name="age"
            value={name.age}
            onChange={handleChange}
            placeholder="Enter your Age"
            className="py-4 px-3 border border-solid border-gray-400 rounded-2xl w-full"
          />
          <label className="font-semibold text-base">City</label>
          <input
            type="text"
            value={name.city}
            name="city"
            onChange={handleChange}
            placeholder="Enter your City"
            className="py-4 px-3 border border-solid border-gray-400 rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateData;
