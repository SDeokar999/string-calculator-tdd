// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders String Calculator heading', () => {
    render(<App />);
    const headerElement = screen.getByText(/string calculator/i); // Use regex for case-insensitive match
    expect(headerElement).toBeInTheDocument();
  });

  test('has the correct class names', () => {
    render(<App />);
    const headingElement = screen.getByText(/string calculator/i);
    expect(headingElement).toHaveClass('text-base');
    expect(headingElement).toHaveClass('md:text-lg');
    expect(headingElement).toHaveClass('lg:text-xl');
    expect(headingElement).toHaveClass('mx-10');
    expect(headingElement).toHaveClass('mt-10');
  });
});
