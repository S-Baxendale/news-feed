import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HomeIcon, SearchIcon, HeartIcon } from "../../fragments";
import Search from "../Search";

const NavContainer = styled.div`
  height: 50px;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacingXs};
`;

const IconContainer = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;

const SearchContainer = styled.div`
  width: ${({ show }) => (show ? "100%" : 0)};
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transition: width 0.4s ease;
`;

const Navigation = () => {
  const [showSearch, toggleShowSearch] = useState(false);

  return (
    <NavContainer>
      <NavLink exact to={`/`}>
        <HomeIcon color="white" />
      </NavLink>
      <NavLink exact to={`/bookmarks`}>
        <IconContainer>
          <HeartIcon color="white" />
        </IconContainer>
      </NavLink>
      <IconContainer onClick={() => toggleShowSearch(state => !state)}>
        <SearchIcon color="white" />
      </IconContainer>
      <SearchContainer show={showSearch}>
        <Search show={showSearch} toggleShowSearch={toggleShowSearch} />
      </SearchContainer>
    </NavContainer>
  );
};

export default Navigation;
