import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordForm from '../WordForm';
import WordList from '../WordList';
import WinBanner from '../WinBanner';
import LostBanner from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  // Determine game status based on guesses and answer
  const isWon = guesses.some(guess => guess.guess === answer);
  const isLost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !isWon;
  const gameStatus = isWon ? 'won' : isLost ? 'lost' : null;
  const guessesNumber = guesses.length;

  function handleSubmitGuess(guess) {
    if (gameStatus) {
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
      <WordForm
        handleSubmitGuess={handleSubmitGuess}
        guesses={guesses}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && <WinBanner guessesNumber={guessesNumber} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </div>
  );
}

export default Game;
