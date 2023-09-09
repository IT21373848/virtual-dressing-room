import React, { useState } from "react";

const Profile = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeStyles = isDarkTheme
    ? {
        backgroundColor: "#1a1a1a",
        textColor: "text-gray-100",
        profileBgColor: "bg-gray-900",
      }
    : {
        backgroundColor: "white",
        textColor: "text-gray-900",
        profileBgColor: "bg-white",
      };

  // Modify colors for dark theme
  if (isDarkTheme) {
    themeStyles.backgroundColor = "#1a1a1a";
    themeStyles.textColor = "text-gray-100";
    themeStyles.profileBgColor = "bg-gray-900";
  }

  // Sample profile and body measurements data
  const [profileData, setProfileData] = useState({
    name: "Your Name",
    gender: "Your Gender",
    description:
      "Totally optional short description about yourself, what you do, and so on.",
  });

  const [bodyMeasurements, setBodyMeasurements] = useState({
    height: "180 cm",
    weight: "70 kg",
    chest: "100 cm",
    waist: "80 cm",
    hips: "95 cm",
  });

  const [isEditingBodyMeasurements, setIsEditingBodyMeasurements] =
    useState(false);

  const handleEditClick = () => {
    setIsEditingBodyMeasurements(!isEditingBodyMeasurements);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBodyMeasurements({
      ...bodyMeasurements,
      [name]: value,
    });
  };

  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
 <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      {/* Main Col */}
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl mx-6 lg:mx-0"
        style={{
          backgroundColor: themeStyles.backgroundColor,
          // You can remove textColor from here
          // It will be handled through Tailwind CSS classes
          // textColor: themeStyles.textColor,
        }}
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <h1 className={`text-3xl font-bold pt-8 lg:pt-0 ${themeStyles.textColor}`}>
            {profileData.name}
          </h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className={`pt-2 text-xs lg:text-sm ${themeStyles.textColor}`}>
            <strong>Gender:</strong> {profileData.gender}
          </p>
          <p className={`pt-8 text-sm ${themeStyles.textColor}`}>{profileData.description}</p>

          

            {isEditingBodyMeasurements ? (
              <div className="pt-4">
                <label className="text-gray-600">Height:</label>
                <input
                  type="text"
                  name="height"
                  value={bodyMeasurements.height}
                  onChange={handleInputChange}
                  className="block w-full border rounded-lg py-2 px-3 mt-1 bg-gray-100"
                />
                <label className="text-gray-600">Weight:</label>
                <input
                  type="text"
                  name="weight"
                  value={bodyMeasurements.weight}
                  onChange={handleInputChange}
                  className="block w-full border rounded-lg py-2 px-3 mt-1 bg-gray-100"
                />
                <label className="text-gray-600">Chest:</label>
                <input
                  type="text"
                  name="chest"
                  value={bodyMeasurements.chest}
                  onChange={handleInputChange}
                  className="block w-full border rounded-lg py-2 px-3 mt-1 bg-gray-100"
                />
                <label className="text-gray-600">Waist:</label>
                <input
                  type="text"
                  name="waist"
                  value={bodyMeasurements.waist}
                  onChange={handleInputChange}
                  className="block w-full border rounded-lg py-2 px-3 mt-1 bg-gray-100"
                />
                <label className="text-gray-600">Hips:</label>
                <input
                  type="text"
                  name="hips"
                  value={bodyMeasurements.hips}
                  onChange={handleInputChange}
                  className="block w-full border rounded-lg py-2 px-3 mt-1 bg-gray-100"
                />
              </div>
            ) : (
              <div className="pt-4">
                <p className="text-gray-600">
                  <strong>Height:</strong> {bodyMeasurements.height}
                </p>
                <p className="text-gray-600">
                  <strong>Weight:</strong> {bodyMeasurements.weight}
                </p>
                <p className="text-gray-600">
                  <strong>Chest:</strong> {bodyMeasurements.chest}
                </p>
                <p className="text-gray-600">
                  <strong>Waist:</strong> {bodyMeasurements.waist}
                </p>
                <p className="text-gray-600">
                  <strong>Hips:</strong> {bodyMeasurements.hips}
                </p>
              </div>
            )}

            <div className="pt-4">
              <button
                onClick={handleEditClick}
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
              >
                {isEditingBodyMeasurements
                  ? "Save Measurements"
                  : "Edit Measurements"}
              </button>
            </div>
          </div>
        </div>

        {/* Img Col */}
        <div className="w-full lg:w-2/5">
          {/* Big profile image for side bar (desktop) */}
          <img
            src="https://source.unsplash.com/MP0IUfwrn0A"
            alt="Profile"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>

        {/* Pin to top right corner */}
        <div className="absolute top-26 right-0 h-12 w-18 p-6">
          {/* Dark theme toggle button */}
          {/* <button
            className="js-change-theme focus:outline-none"
            onClick={toggleTheme}
          >
            🌙
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
