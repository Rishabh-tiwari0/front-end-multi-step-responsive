import React, { useState } from "react";

const Firstpage = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    mobileNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });

    // Reset the error when the user starts typing
    setFormErrors({ ...formErrors, [id]: "" });
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;

    // Check if the input field is empty
    if (!value) {
      setFormErrors({ ...formErrors, [id]: "This field is required" });
    }
  };

  return (
    <div>
      <h1 className="text-2xl mt-5 mb-2" style={{ fontFamily: "Ubuntu-bold" }}>
        Personal info
      </h1>
      <p
        className="text-[#9699ab] mb-2"
        style={{ fontFamily: "Ubuntu-medium" }}
      >
        Please provide your name, email address, and phone number
      </p>
      <div className="flex flex-col gap-4 text-sm font-bold text-gray-600 sm:gap-7 sm:mt-7">
        <div className="flex flex-col">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            className={`w-full h-10 border-[1px] rounded-[4px] ${
              formErrors.username ? "border-red-500" : "border-[#d6d9e6]"
            }`}
            value={formValues.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.username && (
            <p className="text-red-500 text-xs mt-1">{formErrors.username}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className={`w-full h-10 border-[1px] rounded-[4px] ${
              formErrors.email ? "border-red-500" : "border-[#d6d9e6]"
            }`}
            value={formValues.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobileNumber">Phone Number</label>
          <input
            type="text"
            id="mobileNumber"
            className={`w-full h-10 border-[1px] rounded-[4px] ${
              formErrors.mobileNumber ? "border-red-500" : "border-[#d6d9e6]"
            }`}
            value={formValues.mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.mobileNumber && (
            <p className="text-red-500 text-xs mt-1">
              {formErrors.mobileNumber}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
