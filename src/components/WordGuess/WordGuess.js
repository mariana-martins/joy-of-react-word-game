import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function WordGuess({ value, answer }) {
  const NUM_OF_CELLS = 5;

  // Get the validation result for this guess
  const result = value ? checkGuess(value.guess, answer) : null;

  return (
    <p className="guess">
      {range(NUM_OF_CELLS).map((index) => {
        const cellStatus = result ? result[index]?.status : '';
        return (
          <span className={`cell ${cellStatus}`} key={index}>
            {value ? value.guess[index] : ''}
          </span>
        );
      })}
    </p>
  );
}

export default WordGuess;
