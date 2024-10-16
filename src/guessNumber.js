import React, { useState } from 'react';  
import { Button, TextField, Typography, Box } from '@mui/material';  

const GuessingGame = () => {  
  const [guess, setGuess] = useState('');  
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);  
  const [message, setMessage] = useState('');  

  const handleGuess = () => {  
    const userGuess = parseInt(guess);  
    if (userGuess === randomNumber) {  
      setMessage('Correct! The number was ' + randomNumber);  
      setGuess('');  
      setRandomNumber(Math.floor(Math.random() * 10) + 1);  
    } else {  
      setMessage(userGuess < randomNumber ? 'Higher!' : 'Lower!');  
    }  
  };  

  return (  
    <Box  
      display="flex"  
      flexDirection="column"  
      alignItems="center"  
      justifyContent="center"  
      minHeight="100vh"  
      bgcolor="#424242" // Dark grey background color
      color="#fff"  
      padding={2}  
    >  
      <Box  
        display="flex"  
        flexDirection="column"  
        alignItems="center"  
        justifyContent="center"  
        bgcolor="#424242" // Keep background color same
        padding={3} // Adjust padding as needed
        borderRadius={2} // Optional: rounded corners
        boxShadow={3} // Optional: add shadow for depth
      >  
        <Typography variant="h4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Guessing Random Number Game
        </Typography>  
        <TextField  
          label="Guess a number between 1 and 10"  
          value={guess}  
          onChange={(e) => setGuess(e.target.value)}  
          type="number"  
          margin="normal" 
          variant="outlined"  
          fullWidth  
        />  
        <Button variant="contained" onClick={handleGuess}>Guess!</Button>  
        <Typography style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
          {message}
        </Typography>  
      </Box>  
    </Box>  
  );  
};  

export default GuessingGame;

