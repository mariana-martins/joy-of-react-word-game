import React from 'react';

function WordForm({ handleSubmitGuess }) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(value);
    setValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={value}
        onChange={(event) => handleChange(event)}
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="Please enter a 5 letter word"
      />
    </form>
  );
}

export default WordForm;
