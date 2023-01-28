import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #56c8ea;
  padding: 10px 24px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 200px;
  height: 28px;
  font: inherit;
  font-size: 12px;
  border: none;
  border-radius: 5px 0 0 5px;
  border-color: #3a8095;
  outline: none;
  padding: 8px 12px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  ::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  align-items: center;
  width: 70px;
  height: 28px;
  border: none;
  border-radius: 0 5px 5px 0;
  border-color: #3a8095;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  :hover {
    opacity: 1;
  }
`;
