import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import StringCalculatorUI from "./StringCalculatorUI";

test("renders learn react link", () => {
  render(<StringCalculatorUI />);
  const inputElement = screen.getByTestId("stringInputBox");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveClass('m-20');
  expect(inputElement).toHaveClass('border');
  expect(inputElement).toHaveClass('border-gray-300');
  expect(inputElement).toHaveClass('rounded-lg');
  expect(inputElement).toHaveClass('p-3');
});

test("renders calculator button", () => {
  render(<StringCalculatorUI />);
  const buttonElement = screen.getByTestId("calculatorButton");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('bg-blue-500');
  expect(buttonElement).toHaveClass('text-white');
  expect(buttonElement).toHaveClass('font-semibold');
  expect(buttonElement).toHaveClass('py-2');
  expect(buttonElement).toHaveClass('px-4');
  expect(buttonElement).toHaveClass('rounded-lg');
  expect(buttonElement).toHaveClass('shadow-md');
});

test("gives the correct outpt for 1,2,3 ", () => {
  render(<StringCalculatorUI />);
  const inputElements = screen.getByTestId("stringInputBox");
  fireEvent.change(inputElements, { target: { value: "1,2,3" } });
  const buttonclick = screen.getByTestId("calculatorButton");
  fireEvent.click(buttonclick);
  expect(screen.getByText("Result: 6")).toBeInTheDocument();
});

test("checking for negative numbers ", () => {
  render(<StringCalculatorUI />);
  const inputElementNegative = screen.getByTestId("stringInputBox");
  fireEvent.change(inputElementNegative, { target: { value: "-1,-2" } });
  const buttonclick = screen.getByTestId("calculatorButton");
  fireEvent.click(buttonclick);
  expect(
    screen.getByText("Negative numbers not allowed: -1, -2")
  ).toBeInTheDocument();
});

test("checking for addition of numbers from delimiter ", () => {
  render(<StringCalculatorUI />);
  const inputElementsDelimiter = screen.getByTestId("stringInputBox");
  fireEvent.change(inputElementsDelimiter, { target: { value: "//;\n2,4,3" } });
  const buttonclick = screen.getByTestId("calculatorButton");
  fireEvent.click(buttonclick);
  expect(screen.getByText("Result: 9")).toBeInTheDocument();
});

test("checking for negative numbers from delimiter scenario 1", () => {
  render(<StringCalculatorUI />);
  const inputElementsScenario = screen.getByTestId("stringInputBox");
  fireEvent.change(inputElementsScenario, { target: { value: "//;\n2;-9;3" } });
  const buttonclick = screen.getByTestId("calculatorButton");
  fireEvent.click(buttonclick);
  expect(
    screen.getByText("Negative numbers not allowed: -9")
  ).toBeInTheDocument();
});

test("checking for negative numbers from delimiter scenario 2 ", () => {
  render(<StringCalculatorUI />);
  const inputElementsScenarios = screen.getByTestId("stringInputBox");
  fireEvent.change(inputElementsScenarios, {
    target: { value: "//;\n2,-9,1,3" },
  });
  const buttonclick = screen.getByTestId("calculatorButton");
  fireEvent.click(buttonclick);
  expect(
    screen.getByText("Negative numbers not allowed: -9")
  ).toBeInTheDocument();
});

test("checking for negative numbers from delimiter scenario 2 ", () => {
    render(<StringCalculatorUI />);
    const inputElementsEmpty = screen.getByTestId("stringInputBox");
    fireEvent.change(inputElementsEmpty, {
      target: { value: "" },
    });
    const buttonclick = screen.getByTestId("calculatorButton");
    fireEvent.click(buttonclick);
    expect(
      screen.getByText("Result: 0")
    ).toBeInTheDocument();
  });