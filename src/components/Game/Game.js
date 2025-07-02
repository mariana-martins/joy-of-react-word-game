import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordForm from '../WordForm';
import WordList from '../WordList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuess = {
      guess,
      id: crypto.randomUUID(),
    };
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <div className="game-wrapper">
      <WordList guesses={guesses} />
      <WordForm handleSubmitGuess={handleSubmitGuess} />
    </div>
  );
}

export default Game;
