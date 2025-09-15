
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock fetch for Home component
beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve('# Welcome to the Pokedex!'),
    })
  );
});

afterAll(() => {
  global.fetch && (global.fetch = undefined);
});

test('renders Pokémon title in nav', () => {
  render(<App />);
  expect(screen.getByText('Pokémon')).toBeInTheDocument();
});

test('renders Home nav option', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('renders List nav option', () => {
  render(<App />);
  expect(screen.getByText('List')).toBeInTheDocument();
});

test('renders Home page markdown', async () => {
  render(<App />);
  expect(await screen.findByText('Welcome to the Pokedex!')).toBeInTheDocument();
});
