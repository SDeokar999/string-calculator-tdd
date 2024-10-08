import React, { useState } from "react";
import add  from "./StringCalculator";

const StringCalculatorUI = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
      setInput("");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unexpected error occurred");
      }
      setResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        data-testid="stringInputBox"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        className="m-20 border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      <button
      data-testid="calculatorButton"
        onClick={handleCalculate}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out sm:text-sm md:text-base lg:text-lg"
      >
        Calculate
      </button>
      {result !== null && (
        <p data-testid="calculatorResult" className="text-base md:text-lg lg:text-xl">Result: {result}</p>
      )}
      {error && <p data-testid="stringInputBox" style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default StringCalculatorUI;