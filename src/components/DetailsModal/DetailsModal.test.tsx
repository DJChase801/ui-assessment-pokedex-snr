import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { DetailsModal } from './DetailsModal';

// Mock the useGetPokemonDetails hook
vi.mock('src/hooks/useGetPokemonDetails', () => ({
  useGetPokemonDetails: (id: string) => ({
    loading: false,
    pokemon: {
      id,
      name: 'Bulbasaur',
      number: '001',
      image: 'bulbasaur.png',
      types: ['Grass', 'Poison'],
      weight: { minimum: '6.04kg', maximum: '7.07kg' },
      height: { minimum: '0.61m', maximum: '0.71m' },
      classification: 'Seed Pokémon',
      resistant: ['Water', 'Electric'],
      weaknesses: ['Fire', 'Ice'],
      fleeRate: 0.1,
      maxCP: 951,
      maxHP: 1071,
    },
  }),
}));

describe('DetailsModal', () => {
  it('renders modal with pokemon details', () => {
    render(<DetailsModal id="001" />);
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Number: 001')).toBeInTheDocument();
    expect(screen.getByText('Weaknesses: Fire, Ice')).toBeInTheDocument();
    expect(screen.getByText('Height: 0.61m - 0.71m')).toBeInTheDocument();
    expect(screen.getByText('Weight: 6.04kg - 7.07kg')).toBeInTheDocument();
    expect(screen.getByText('Classification: Seed Pokémon')).toBeInTheDocument();
    expect(screen.getByText('Resistant: Water, Electric')).toBeInTheDocument();
    expect(screen.getByText('Flee Rate: 0.1')).toBeInTheDocument();
    expect(screen.getByText('Max CP: 951')).toBeInTheDocument();
    expect(screen.getByText('Max HP: 1071')).toBeInTheDocument();
    expect(screen.getByText('Grass')).toBeInTheDocument();
    expect(screen.getByText('Poison')).toBeInTheDocument();
  });

  it('calls window.history.back when Close is clicked', () => {
    const backSpy = vi.spyOn(window.history, 'back');
    render(<DetailsModal id="001" />);
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(backSpy).toHaveBeenCalled();
    backSpy.mockRestore();
  });
});
