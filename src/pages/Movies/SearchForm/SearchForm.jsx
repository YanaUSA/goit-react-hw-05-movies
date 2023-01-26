import { useState } from 'react';
import { toast } from 'react-toastify';

export const SearchForm = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleQueryChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast.warn('Please enter search query!');
      return;
    }
    onChange(inputValue);
    // setInputValue('');
  };

  return (
    <main style={{ padding: 3, backgroundColor: 'bisque' }}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for movie"
            value={inputValue}
            onChange={handleQueryChange}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </main>
  );
};
