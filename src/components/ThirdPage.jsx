import React, { useState } from "react";

const ThirdPage = () => {
  const servicesArray = [
    {
      title: "Online Services",
      detail: ["Access to Multiple Games"],
      cost: 1,
    },
    {
      title: "Larger Storage",
      detail: ["Extra 1 TB of Cloud Save"],
      cost: 2,
    },
    {
      title: "Customizable Profile",
      detail: ["Custom Theme on your Profile"],
      cost: 2,
    },
  ];

  // State to keep track of selected services
  const [selectedServices, setSelectedServices] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (title) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(title)
        ? prevSelected.filter((service) => service !== title)
        : [...prevSelected, title]
    );
  };

  return (
    <div>
      <h1
        style={{ fontFamily: "Ubuntu-bold" }}
        className="text-2xl sm:text-3xl"
      >
        Pick add-ons{" "}
      </h1>
      <p style={{ fontFamily: "Ubuntu-medium" }} className="text-gray-400 mt-3">
        Add-ons help enhance your gaming experience.{" "}
      </p>
      {/* options */}
      <div
        style={{ fontFamily: "Ubuntu-medium" }}
        className="flex flex-col gap-5 mt-7"
      >
        {servicesArray.map((elem, index) => {
          const isActive = selectedServices.includes(elem.title);

          return (
            <div
              key={index}
              className={`flex items-center text-[#02295a] justify-between border rounded-lg px-4 py-3 cursor-pointer hover:border-[#02295a] ${
                isActive ? "border-[#02295a]" : "border-gray-300"
              }`}
              onClick={() => handleCheckboxChange(elem.title)}
            >
              <div className="flex items-center gap-5">
                <input
                  type="checkbox"
                  name={elem.title}
                  checked={isActive}
                  onChange={() => handleCheckboxChange(elem.title)}
                />
                <div>
                  <h3>{elem.title}</h3>
                  <p className="text-[12px] text-gray-400">{elem.detail}</p>
                </div>
              </div>
              <div>
                <p className="text-xs">{`+${elem.cost}$ per mo`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdPage;
