import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "./Input";

const EditProfile = ({ profile, onClose, onSave }) => {
  const [formData, setFormData] = useState(profile);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };
  return (
    <motion.div
      key="editSidebar"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 lg:w-1/2 w-11/12 h-full bg-border text-white flex flex-col justify-start items-start gap-7 py-16 lg:px-7 px-4 shadow-lg  z-50"
    >
      <div className="flex justify-between items-center w-full">
        <h1 className="text-white font-amiri font-semibold text-lg">
          Edit Profile
        </h1>
        <div className="flex justify-center items-center w-5 h-5 bg-greenLight rounded-full">
          <div className="p-1 bg-greeny rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap w-full gap-9 justify-start items-start">
        <Input
          html="name"
          title="Name"
          value={formData.name}
          type="text"
          placeholder="Enter your Name"
          onChange={handleChange}
          name="name"
        />
        <Input
          html="role"
          title="Role"
          value={formData.role}
          type="text"
          placeholder="Enter your Role"
          onChange={handleChange}
          name="role"
        />
        <Input
          html="Favorite Company"
          title="Favorite Company"
          value={formData.company}
          type="text"
          placeholder="Enter your Favourite Company"
          onChange={handleChange}
          name="company"
        />
        <Input
          html="position"
          title="Advanced Position"
          value={formData.position}
          type="text"
          placeholder="Advanced Position"
          onChange={handleChange}
          name="position"
        />
        <Input
          html="skill"
          title="Best Skilled Software"
          value={formData.software}
          type="text"
          placeholder="Enter your Skill"
          onChange={handleChange}
          name="software"
        />

        <div className="col-span-2">
          <label className="block mb-2">Profile Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-600 rounded hover:bg-gray-500"
        >
          Close
        </button>
        <button
          onClick={() => onSave(formData)}
          className="px-6 py-2 bg-lime-500 text-black rounded hover:bg-lime-400"
        >
          Save
        </button>
      </div>
    </motion.div>
  );
};

export default EditProfile;
