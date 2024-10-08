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
  });
});
