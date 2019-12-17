import React, { useState } from "react";
import styled from "styled-components";

import { SearchIcon, CrossIcon } from "../../fragments";
import { fetchSearch } from "../../../actions/search";
import { TOKEN } from "../../../token";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";

const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacingXs};
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
  padding-left: 50px;

  &:focus {
    outline: none;
  }
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.6s ease 0.4s;
`;

const IconContainer = styled.div`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.6s ease 0.4s;
`;

const CrossContainer = styled.div`
  margin-left: auto;
  margin-right: 40px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.6s ease 0.4s;
  cursor: pointer;
  positon: absolute;
  z-index: 200;
`;

const URL = "https://newsapi.org/v2/everything?q=";

const Search = ({ show, toggleShowSearch, history }) => {
  const [inputValue, updateInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputOnChange = value => {
    updateInputValue(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`${URL}${inputValue}&apiKey=${TOKEN}`);
    const data = await response.json();
    dispatch(fetchSearch({ data, searchValue: inputValue }));
    updateInputValue("");
    history.push("/search");
    toggleShowSearch(false);
  };

  return (
    <SearchContainer>
      <IconContainer show={show}>
        <SearchIcon color="black" />
      </IconContainer>
      <form onSubmit={e => handleSubmit(e)}>
        <Input
          show={show}
          value={inputValue}
          placeholder="Enter a keyword to search articles..."
          onChange={e => handleInputOnChange(e.target.value)}
        />
      </form>
      <CrossContainer
        show={show}
        onClick={() => {
          toggleShowSearch(false);
          updateInputValue("");
        }}
      >
        <CrossIcon color="black" />
      </CrossContainer>
    </SearchContainer>
  );
};

export default withRouter(Search);
