import React from 'react';

function WinBanner({ guessesNumber }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>
          {guessesNumber === 1 ? '1 guess' : `${guessesNumber} guesses`}
        </strong>
        .
      </p>
    </div>
  );
}

export default WinBanner;