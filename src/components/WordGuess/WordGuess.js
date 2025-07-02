import React from 'react';
import { range } from '../../utils';

function WordGuess({ value }) {
  const NUM_OF_CELLS = 5;

  return (
    <p className="guess">
      {range(NUM_OF_CELLS).map((index) => (
        <span className="cell" key={index}>
          {value ? value.guess[index] : ''}
        </span>
      ))}
    </p>
  );
}

export default WordGuess;
