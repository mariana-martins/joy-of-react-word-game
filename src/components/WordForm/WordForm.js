import React from 'react';

function WordForm() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value.toUpperCase());
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
      />
    </form>
  );
}

export default WordForm;
