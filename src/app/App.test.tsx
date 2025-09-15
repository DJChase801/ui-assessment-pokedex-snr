
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock fetch for Home component
let originalFetch: typeof global.fetch;

beforeAll(() => {
  originalFetch = global.fetch;
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      headers: {
        get: () => null,
      },
      text: () => Promise.resolve('# Welcome to the Pokedex!'),
      json: () => Promise.resolve({}),
      // Add any other Response properties your code/tests may use
    } as unknown as Response)
  );
});

afterAll(() => {
  global.fetch = originalFetch;
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
