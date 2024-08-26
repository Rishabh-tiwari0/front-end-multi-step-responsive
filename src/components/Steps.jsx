import React, { useState, useEffect } from "react";
import mobile from "../../assets/images/bg-sidebar-mobile.svg";
import desktop from "../../assets/images/bg-sidebar-desktop.svg";

const Steps = ({ activeStep, setActiveStep, handleStepClick }) => {
  // Step 1: Create an array of steps
  const steps = [
    { number: 1, label: "Step 1" },
    { number: 2, label: "Step 2" },
    { number: 3, label: "Step 3" },
    { number: 4, label: "Step 4" },
  ];

  // Step 2: State to handle the image source based on screen size
  const [imageSrc, setImageSrc] = useState(mobile);

  // Step 4: useEffect to listen to window resize and change image source
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setImageSrc(desktop);
      } else {
        setImageSrc(mobile);
      }
    };

    // Set the initial image based on the current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Step 5: Function to handle step click

  return (
    <>
      <div className="absolute top-0 left-0 w-[100vw] -z-20 sm:static sm:z-0 sm:h-full sm:w-fit sm:contain-content">
        <img src={imageSrc} alt="background" className="w-full sm:h-full" />
      </div>
      <div className="flex justify-evenly   absolute top-20 w-[80vw] sm:top-8 sm:flex-col sm:justify-start sm:gap-9 sm:items-center sm:h-full sm:w-full ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`z-50 border-[1px] flex items-center justify-center border-white rounded-full w-10 h-10 text-lg cursor-pointer ${
              activeStep === step.number
                ? "bg-[#adbeff] text-black"
                : "text-white"
            }`}
            style={{ fontFamily: "Ubuntu-medium" }}
            onClick={() => handleStepClick(step.number)}
          >
            <h3>{step.number}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
