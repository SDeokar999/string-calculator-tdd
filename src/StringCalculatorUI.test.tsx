import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import StringCalculatorUI from "./StringCalculatorUI";

test("renders learn react link", () => {
  render(<StringCalculatorUI />);
  const inputElement = screen.getByTestId("stringInputBox");
  expect(inputElement).toBeInTheDocument();
});

test("renders calculator button", () => {
  render(<StringCalculatorUI />);
  const buttonElement = screen.getByTestId("calculatorButton");
  expect(buttonElement).toBeInTheDocument();
});
