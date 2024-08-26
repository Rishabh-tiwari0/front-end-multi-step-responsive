import { useState } from "react";
import "./App.css";
import Firstpage from "./components/Firstpage";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import SecondPage from "./components/SecondPage";
// Import additional pages for step 3 and step 4
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleStepClick = (stepNumber) => {
    setActiveStep(stepNumber);
  };

  // Function to render the content based on the active step
  const renderContent = () => {
    switch (activeStep) {
      case 1:
        return <Firstpage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      case 4:
        return <FourthPage showSuccess={showSuccess} />;
      default:
        return <Firstpage />; // Default to the first page
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-[100vw] h-[100vh] relative flex-col ">
        <div
          className={`bg-white w-[90vw] sm:min-h-[60vh] sm:w-[50vw] sm:gap-32 sm:min-w-[50%] rounded-lg shadow-lg p-4 sm:p-4 sm:flex ${
            activeStep == 2 ? "mt-8" : ""
          }`}
        >
          <div className="sm:relative sm:h-full">
            <Steps
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              handleStepClick={handleStepClick}
            />
          </div>
          <div className="sm:flex sm:items-start">
            <div className="sm:flex sm:flex-col sm:h-full sm:justify-between">
              {renderContent()}
              {/* footer */}
              <Footer
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                setShowSuccess={setShowSuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
