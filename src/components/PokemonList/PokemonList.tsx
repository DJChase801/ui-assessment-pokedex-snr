import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonListCard } from './PokemonListCard/PokemonListCard';
import { SearchBox } from '../SearchBox/SearchBox';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [visiblePokemons, setVisiblePokemons] = React.useState(pokemons);

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      <SearchBox allPokemons={pokemons} visiblePokemons={visiblePokemons} setVisiblePokemons={setVisiblePokemons} />
      {pokemons && pokemons.map((pkmn) => {
        if (visiblePokemons.find(vp => vp.id === pkmn.id) || visiblePokemons.length === 0) {
          return <PokemonListCard key={pkmn.id} pokemon={pkmn} />;
        }
      })}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
  },
  { name: 'PokemonList' }
);
