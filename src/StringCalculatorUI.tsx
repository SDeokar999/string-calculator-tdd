import React, { useState } from "react";
// import add  from "./StringCalculator";

const StringCalculatorUI = () => {

  return (
    <div>
      <input
        type="text"
        data-testid="stringInputBox"
        placeholder="Enter numbers"
        className="m-20 border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <button
      data-testid="calculatorButton"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out sm:text-sm md:text-base lg:text-lg"
      >
        Calculate
      </button>
    </div>
  );
};

export default StringCalculatorUI;