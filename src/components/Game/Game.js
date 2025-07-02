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

  // Determine game status based on guesses and answer
  const isWon = guesses.some(guess => guess.guess === answer);
  const isLost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !isWon;
  const gameStatus = isWon ? 'happy' : isLost ? 'sad' : null;

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
      {gameStatus && (
        <div className={`${gameStatus} banner`}>
          {gameStatus === 'happy' && (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>
                {guesses.length === 1 ? '1 guess' : `${guesses.length} guesses`}
              </strong>
              .
            </p>
          )}
          {gameStatus === 'sad' && (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
