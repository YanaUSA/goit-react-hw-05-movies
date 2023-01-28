import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SearchFormContainer,
  SearchFormBtn,
  SearchFormInput,
} from './SearchForm.styled';

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
    <main>
      <SearchFormContainer onSubmit={handleSubmit}>
        <label>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for movie"
            value={inputValue}
            onChange={handleQueryChange}
          />
        </label>
        <SearchFormBtn type="submit">Search</SearchFormBtn>
      </SearchFormContainer>
    </main>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
