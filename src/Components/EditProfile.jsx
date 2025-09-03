import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import Drop from "./Drop";
import TextArea from "./TextArea";
import Button from "./Button";

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
      className="fixed top-0 right-0 lg:w-1/2 w-11/12 h-full overflow-scroll-hide bg-border text-white flex flex-col overflow-y-scroll scrollbar-hide justify-start items-start gap-7 py-10 lg:px-7 px-4 shadow-lg  z-50"
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
        <Input
          html="tags"
          title="Tags"
          value={formData.tags}
          type="text"
          placeholder="Tags"
          onChange={handleChange}
          name="tags"
        />
        <Drop
          html="experience"
          title="Experience Level"
          value={formData.experience}
          placeholder="Pick your Level"
          onChange={handleChange}
          name="experience"
          opt1="Beginner"
          opt2="Associate"
          opt3="Expert"
        />
        <Drop
          html="city"
          title="City"
          value={formData.city}
          placeholder="Pick your City"
          onChange={handleChange}
          name="city"
          opt1="Tirunelveli"
          opt2="Tenkasi"
          opt3="Tuticorin"
        />

        <Drop
          html="availability"
          title="Pick your Availability"
          value={formData.availability}
          placeholder="Pick your City"
          onChange={handleChange}
          name="availability"
          opt1="Work from Home"
          opt2="Work from Office"
          opt3="Hybrid"
        />

        <div className="flex gap-3 justify-start items-start flex-col  lg:w-[400px] w-full">
          <label className="w-full font-publicSans text-white text-sm font-medium">
            Upload a Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-textShade
             file:mr-4 file:py-4 file:px-5
             file:rounded-full file:border-0
             file:text-sm file:font-semibold file:font-amiri
             file:bg-greeny file:text-font
             hover:file:bg-lime-400"
          />
        </div>

        <TextArea
          html="overview"
          title="Overview"
          name="overview"
          value={formData.overview}
          onChange={handleChange}
        />
        <TextArea
          html="about"
          title="About Me"
          name="about"
          value={formData.about}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end items-center gap-6 w-full mt-6">
        <Button
          handleClick={onClose}
          name="Close"
          bgColor="bg-border"
          stroke={true}
        />
        <Button
          handleClick={() => onSave(formData)}
          name="Save"
          bgColor="bg-green-gradient"
          text="text-font"
        />
      </div>
    </motion.div>
  );
};

export default EditProfile;
