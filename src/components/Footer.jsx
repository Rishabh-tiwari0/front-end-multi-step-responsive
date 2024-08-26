import React from "react";

const Footer = ({ activeStep, setActiveStep, setShowSuccess }) => {
  // Function to increment the active step count
  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep((prevStep) => prevStep + 1);
    }
    if (activeStep == 4) {
      setShowSuccess(true);
    }
  };

  // Function to decrement the active step count
  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };
  const ConfirmHandle = () => {};

  return (
    <div
      className={`absolute bottom-0 left-0 shadow sm:shadow-none h-16 w-full bg-white sm:static`}
    >
      <div
        className={`w-[90%] mx-auto flex justify-between items-center h-full ${
          activeStep == 1 ? "flex-row-reverse" : ""
        }`}
      >
        {" "}
        {activeStep > 1 && (
          <button
            type="button"
            className="text-[#9699ab] rounded-lg text-sm px-5 py-2.5 h-fit active:scale-[98%] hover:text-[#02295a]"
            style={{ fontFamily: "Ubuntu-medium" }}
            onClick={handlePreviousStep}
          >
            Go Back
          </button>
        )}
        <button
          type="button"
          className={`text-white rounded-[4px] text-sm px-5 py-2.5 bg-[#02295a] h-fit active:scale-[98%]`}
          style={{ fontFamily: "Ubuntu-medium" }}
          onClick={handleNextStep}
        >
          {activeStep == 4 ? "Confirm" : "Next Step"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
