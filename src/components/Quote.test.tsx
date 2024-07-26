import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from './Quote';

test('renders quote with text and author', () => {
  render(<Quote />);
  expect(screen.getByText(/The only limit to our realization of tomorrow is our doubts of today./i)).toBeInTheDocument();
  expect(screen.getByText(/- Franklin D. Roosevelt/i)).toBeInTheDocument();
});

test('next quote button shows the next quote', () => {
  render(<Quote />);
  fireEvent.click(screen.getByText(/Next Quote/i));
  expect(screen.getByText(/The future belongs to those who believe in the beauty of their dreams./i)).toBeInTheDocument();
  expect(screen.getByText(/- Eleanor Roosevelt/i)).toBeInTheDocument();
});

test('tweet button opens Twitter intent with correct quote', () => {
  render(<Quote />);
  // eslint-disable-next-line testing-library/no-node-access
  const tweetButton = screen.getByText(/Tweet/i).closest('a');
  expect(tweetButton).toHaveAttribute(
    'href',
    expect.stringContaining('https://twitter.com/intent/tweet?text=%22The%20only%20limit%20to%20our%20realization%20of%20tomorrow%20is%20our%20doubts%20of%20today.%22%20-%20Franklin%20D.%20Roosevelt')
  );
});
