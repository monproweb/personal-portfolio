import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders facebook link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Facebook/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders github link', () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders twitter link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Twitter/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders gmail link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Send a mail/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders discord link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Discord/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders monproweb link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mon Pro Web/i);
  expect(linkElement).toBeInTheDocument();
});
