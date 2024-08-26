import React, { useState } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

const SecondPage = () => {
  const [activePlan, setActivePlan] = useState(null);
  const [isYearly, setIsYearly] = useState(false); // State to track billing option

  const handlePlanClick = (plan) => {
    setActivePlan(plan);
  };

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <div>
      <h1
        style={{ fontFamily: "Ubuntu-bold" }}
        className="text-2xl sm:text-3xl"
      >
        Select your plan
      </h1>
      <p style={{ fontFamily: "Ubuntu-medium" }} className="text-gray-400 mt-3">
        You have the option of monthly or yearly billing.
      </p>
      {/* options list */}
      <div
        style={{ fontFamily: "Ubuntu-medium" }}
        className="flex flex-col gap-5 mt-7 sm:flex-row"
      >
        {/* Arcade Plan */}
        <div
          onClick={() => handlePlanClick("arcade")}
          className={`flex items-center gap-5 border rounded-lg px-4 py-3 sm:flex-col sm:items-start sm:h-40 sm:aspect-square cursor-pointer hover:border-[#02295a] ${
            activePlan === "arcade"
              ? "border-[#02295a] border-[1px]"
              : "border-gray-200"
          }`}
        >
          <img src={arcade} alt="arcade" />
          <div>
            <h3>Arcade</h3>
            <p className="text-[12px] text-gray-400">$9 per mo</p>
          </div>
        </div>
        {/* Advanced Plan */}
        <div
          onClick={() => handlePlanClick("advanced")}
          className={`flex items-center gap-5 border rounded-lg px-4 py-3 sm:flex-col sm:items-start sm:h-40 sm:aspect-square cursor-pointer hover:border-[#02295a] ${
            activePlan === "advanced"
              ? "border-[#02295a] border-[1px]"
              : "border-gray-200"
          }`}
        >
          <img src={advanced} alt="advanced" />
          <div>
            <h3>Advanced</h3>
            <p className="text-[12px] text-gray-400">$12 per mo</p>
          </div>
        </div>
        {/* Pro Plan */}
        <div
          onClick={() => handlePlanClick("pro")}
          className={`flex items-center gap-5 border rounded-lg px-4 py-3 sm:flex-col sm:items-start sm:h-40 sm:aspect-square cursor-pointer hover:border-[#02295a] ${
            activePlan === "pro" ? "border-[#02295a] border" : "border-gray-200"
          }`}
        >
          <img src={pro} alt="pro" />
          <div>
            <h3>Pro</h3>
            <p className="text-[12px] text-gray-400">$15 per mo</p>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-200 rounded-lg flex justify-center items-center mt-5 shadow-sm h-9 gap-3  sm:h-10 "
        style={{ fontFamily: "Ubuntu-medium" }}
      >
        <span className={isYearly ? "text-gray-400" : "text-[#02295a]"}>
          Monthly
        </span>
        <label className="switch">
          <input type="checkbox" onChange={toggleBilling} />
          <span className="slider round"></span>
        </label>
        <span className={isYearly ? "text-[#02295a]" : "text-gray-400"}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default SecondPage;
