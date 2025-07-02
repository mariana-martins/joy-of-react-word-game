import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordForm from '../WordForm';
import WordList from '../WordList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const isGameOver = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  function handleSubmitGuess(guess) {
    if (isGameOver) {
      return null;
    }
    const nextGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <div className="game-wrapper">
      <WordList guesses={guesses} answer={answer} />
      {isGameOver && <p>Game over! You've used all your guesses!</p>}
      <WordForm handleSubmitGuess={handleSubmitGuess} guesses={guesses} />
    </div>
  );
}

export default Game;
