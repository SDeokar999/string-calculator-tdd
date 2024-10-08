import React from "react";
import "./App.css";
import StringCalculatorUI from "./StringCalculatorUI";

function App() {
  return (
    <div className="App">
      <h1 className="text-base md:text-lg lg:text-xl mx-10 mt-10">
        String Calculator
      </h1>
      <StringCalculatorUI/>
    </div>
  );
}

export default App;
