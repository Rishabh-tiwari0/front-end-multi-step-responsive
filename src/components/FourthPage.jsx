import React, { useState } from "react";
import success from "../../assets/images/icon-thank-you.svg";

const FourthPage = ({ showSuccess }) => {
  const plans = [
    {
      title: "Arcade",
      charges: {
        monthly: 9,
        yearly: 90,
      },
    },
    {
      title: "Advanced",
      charges: {
        monthly: 12,
        yearly: 120,
      },
    },
    {
      title: "Pro",
      charges: {
        monthly: 15,
        yearly: 150,
      },
    },
  ];

  const [chosenPlan, setChosenPlan] = useState(plans[0]);
  const [isMonthly, setISmonthly] = useState(true);
  return (
    <>
      {!showSuccess ? (
        <div>
          {" "}
          <h1
            style={{ fontFamily: "Ubuntu-bold" }}
            className="text-2xl sm:text-3xl"
          >
            Finishing up{" "}
          </h1>
          <p
            style={{ fontFamily: "Ubuntu-medium" }}
            className="text-gray-400 mt-3"
          >
            Double check everything looks OK before confirming.{" "}
          </p>
          <div className="bg-gray-100 rounded-lg p-2 mt-5  text-[#02295a]">
            <div className="flex justify-between">
              {" "}
              <div>
                {" "}
                <h3 style={{ fontFamily: "Ubuntu-bold" }}>
                  {`${chosenPlan.title}`}{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => setISmonthly(!isMonthly)}
                  >
                    {isMonthly ? "(Monthly)" : "(Yearly)"}
                  </span>
                </h3>
                <p className="text-xs text-gray-500 underline cursor-pointer">
                  Change
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: "Ubuntu-bold" }} className="text-lg">
                  {`$${
                    isMonthly
                      ? chosenPlan.charges.monthly
                      : chosenPlan.charges.yearly
                  }/${isMonthly ? "Mo" : "yr"}`}
                </h3>
              </div>
            </div>
            <hr className="my-3 border-gray-400" />
            <div>
              <div className="text-sm text-gray-500 flex justify-between mb-2">
                <p>Online services</p>
                <h3>{isMonthly ? `+1$/Mo` : `+10$/Yr`}</h3>
              </div>
              <div className="text-sm text-gray-500 flex justify-between">
                <p>Larget storage</p>
                <h3>{isMonthly ? `+2$/Mo` : `+20$/Yr`}</h3>
              </div>
            </div>
          </div>
          <div className="p-1 text-sm text-gray-500 flex justify-between">
            <p>
              Total <span>{isMonthly ? "(per month)" : "(per year)"}</span>
            </p>
            <h3
              className="text-lg text-blue-800"
              style={{ fontFamily: "Ubuntu-bold" }}
            >
              {isMonthly ? `12$/Mo` : `120$/Yr`}
            </h3>
          </div>
        </div>
      ) : (
        <div className="w-[400px]">
          <div className="flex flex-col items-center h-[400px] sm:justify-center ">
            <img src={success} alt="success" />
            <h1
              style={{ fontFamily: "Ubuntu-bold" }}
              className="text-2xl sm:text-3xl mt-4"
            >
              Thank you!{" "}
            </h1>
            <p className=" text-gray-500 text-center p-6 text-xl text-wrap">
              Thanks for confirming your subsription! we hope you have fun using
              our platform. if you ever have problem feel free to contact us at
              lorem@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FourthPage;
