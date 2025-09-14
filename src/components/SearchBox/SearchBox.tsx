import React from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../hooks/useGetPokemons';

export const SearchBox: React.FC<{ allPokemons: Pokemon[], visiblePokemons: Pokemon[], setVisiblePokemons: React.Dispatch<React.SetStateAction<Pokemon[]>> }> = ({ allPokemons, visiblePokemons, setVisiblePokemons }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setVisiblePokemons(
      allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className={classes.root}>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleChange}
        className={classes.input}
      />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
        width: '400px',
        position: 'fixed',
        top: '40px',
        left: '90px',
        backgroundColor: '#131924',
        padding: '16px',
        boxSizing: 'border-box',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    input: {
      width: '90%',
      padding: '8px 12px',
      fontSize: '16px',
      borderRadius: '4px',
      border: 'none',
      color: '#333',
    },
  },
  { name: 'SearchBox' }
);
