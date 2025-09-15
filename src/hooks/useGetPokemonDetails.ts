import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export type Pokemon = {
  id: string;
  name: string;
  number: string;
  image: string;
  types: string[];
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
};

export const GET_POKEMON_DETAILS = gql`
  query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemonDetails = (id: string) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON_DETAILS, {
    variables: {
      id,
    },
  });

  const pokemon: Pokemon = useMemo(() => data?.pokemon || null, [data]);
  return {
    pokemon,
    ...queryRes,
  };
};
