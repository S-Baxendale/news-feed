import React, { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colorWhite};
  height: 100%;
  position: relative;
  margin: ${({ theme }) => theme.spacingSm} 0 ${({ theme }) => theme.spacingMd};
  max-width: 500px;
`;

const Input = styled.input`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  width: 95%;
  background: none;
  border: none;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Icon = styled.img`
  width: 15px;
`;
const Search = ({ show }) => {
  const [inputValue, updateInputValue] = useState("");

  const handleInputOnChange = value => {
    updateInputValue(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    updateInputValue("");
  };
  return (
    <SearchContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <Input
          value={inputValue}
          placeholder="Enter a keyword to search articles..."
          onChange={e => handleInputOnChange(e.target.value)}
        />
      </form>
      <IconContainer onClick={e => handleSubmit(e)}>
        <Icon src="icons/search-icon.svg" />
      </IconContainer>
    </SearchContainer>
  );
};

export default Search;
