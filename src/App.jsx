import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProfileUi from "./Components/ProfileUi";
import EditProfile from "./Components/EditProfile";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const App = () => {
  const [profile, setProfile] = useState({
    name: "Abdul Aziz",
    role: "UI/UX Designer",
    experience: "Intermediate",
    company: "Google, Apple, Microsoft",
    position: "Product Designer",
    software: "Figma",
    workTime: "8 Hrs",
    city: "Singapore",
    availability: "Work From Office",
    gender: "Male",
    tags: "#ui/ux, #reactwebdeveloper",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    image: "https://lipsum.app/random/1600x900", // default profile image
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSave = (newData) => {
    setProfile(newData);
    setIsEdit(false);
  };
  return (
    <div className="w-full flex flex-col lg:min-h-screen h-auto py-6 lg:px-10 md:px-8 px-4 bg-box gap-10">
      <Header onEdit={() => setIsEdit(true)} />
      <ProfileUi profile={profile} />
      <AnimatePresence mode="wait">
        {isEdit && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsEdit(false)} // close when clicking outside
            />

            <EditProfile
              profile={profile}
              onClose={() => setIsEdit(false)}
              onSave={handleSave}
            />
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default App;
