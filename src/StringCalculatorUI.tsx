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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">String Calculator</h1>
        <input
          type="text"
          value={input}
          data-testid="stringInputBox"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers"
          className="w-full mb-4 border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        <button
          data-testid="calculatorButton"
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out text-lg"
        >
          Calculate
        </button>
        {result !== null && (
          <p
            data-testid="calculatorResult"
            className="mt-4 text-center text-xl text-green-600 font-semibold"
          >
            Result: {result}
          </p>
        )}
        {error && (
          <p
            data-testid="error"
            className="mt-4 text-center text-red-600 font-semibold"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default StringCalculatorUI;
