import React from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../../hooks/useGetPokemons';

export const PokemonListCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() => window.location.href = `/pokemon/${pokemon.id}`}>
      <img src={pokemon.image} alt={pokemon.name} className={classes.image} />
      <div>
        <div className={classes.name}>{pokemon.name}</div>
        <div className={classes.number}>#{pokemon.number}</div>
      </div>
      <div className={classes.types}>
        {pokemon.types.map((type) => (
          <span key={type} className={classes.type}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#009290eb',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px auto',
      '&:hover': {
        backgroundColor: '#00bcbc',
        cursor: 'pointer',
      },
    },
    image: {
        width: '120px',
        height: '120px',
    },
    number: {
        fontSize: '14px',
    },
    name: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '8px 0',
    },
    types: {
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
    },
    type: {
        backgroundColor: '#5c5050ff',
        borderRadius: '12px',
        padding: '4px 12px',
        fontSize: '12px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
  },
  { name: 'PokemonListCard' }
);
