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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper, justo eget vehicula vestibulum, enim enim suscipit lectus, et sagittis nibh risus vel metus. Quisque eu ornare ante, et gravida mauris. Vivamus massa justo, sagittis non viverra sed, sodales non nisi. Nunc semper, massa a aliquet dictum, enim nisi malesuada orci, et elementum lectus turpis et velit. ",
    image: "https://lipsum.app/random/1600x900", // default profile image
    about:
      "Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. Morbi quis ipsum quis velit varius laoreet in scelerisque erat. Suspendisse sed accumsan erat. Proin sagittis ultricies orci id pellentesque. Fusce iaculis mauris quis pulvinar lobortis. Donec sit amet porttitor lorem, vel scelerisque justo. ",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSave = (newData) => {
    setProfile(newData);
    setIsEdit(false);
  };
  return (
    <div className="w-full overflow-y-scroll scrollbar-hide flex flex-col lg:min-h-screen h-auto py-6 lg:px-10 md:px-8 px-4 bg-box gap-10">
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
