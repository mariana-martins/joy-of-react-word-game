import React from 'react';
import WordGuess from '../WordGuess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function WordList({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guessObj = guesses[index];
        return <WordGuess value={guessObj} key={index} />;
      })}
    </div>
  );
}

export default WordList;
