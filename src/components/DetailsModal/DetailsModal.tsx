import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemonDetails } from 'src/hooks/useGetPokemonDetails';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export const DetailsModal = ({ id }: { id: string }) => {
  const classes = useStyles();
  const { pokemon, loading } = useGetPokemonDetails(id);
  console.log('loading: ', loading);
  console.log('pokemon: ', pokemon);

  return (

    <Dialog
      open={true}
      onClose={() => window.history.back()}
      className={classes.root}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "24px",
          backgroundColor: "#fffffeb",
          fontSize: '18px',
        },
      }}
    >
      <DialogTitle className={classes.title}>{pokemon?.name}</DialogTitle>
      <DialogContent>
        {loading && <DialogContentText>Loading...</DialogContentText>}
        {pokemon && (
          <DialogContent>
            <div className={classes.content}>
              <img src={pokemon.image} alt={pokemon.name} />
              <div>
              <div className={classes.attribute}>Number: {pokemon.number}</div>
              <div className={classes.attribute}>Weaknesses: {pokemon.weaknesses.join(', ')}</div>
              <div className={classes.attribute}>Height: {pokemon.height.minimum} - {pokemon.height.maximum}</div>
              <div className={classes.attribute}>Weight: {pokemon.weight.minimum} - {pokemon.weight.maximum}</div>
              <div className={classes.attribute}>Classification: {pokemon.classification}</div>
              <div className={classes.attribute}>Resistant: {pokemon.resistant.join(', ')}</div>
              <div className={classes.attribute}>Flee Rate: {pokemon.fleeRate}</div>
              <div className={classes.attribute}>Max CP: {pokemon.maxCP}</div>
              <div className={classes.attribute}>Max HP: {pokemon.maxHP}</div>
              <div className={classes.attribute}>Types: {pokemon.types.map(type => <span key={type} style={{marginRight: '8px', color: 'black'}}>{type}</span>)}</div>
              </div>
            </div>
        </DialogContent>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.closeButton}
          onClick={() => window.history.back()}>
            Close
        </Button>
      </DialogActions>
    </Dialog >
  );
};

const useStyles = createUseStyles(
  {
    root: {
      borderRadius: '8px',
    },
    title: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      backgroundColor: '#0090a3ff',
      color: 'white',
    },
    content: {
      display: 'flex',
      alignItems: 'space-around',
      gap: '16px',
    },
    attribute: {
      marginBottom: '12px',
      paddingLeft: '16px',
      color: 'black',
    },
    closeButton: {
      color: 'white',
      borderColor: 'white',
      margin: '16px',
      padding: '8px 16px',
      backgroundColor: '#005f63ff',
      '&:hover': {
        borderColor: 'white',
        backgroundColor: '#0090a3ff',
      },
    },
  },
  { name: 'DetailsModal' }
);
