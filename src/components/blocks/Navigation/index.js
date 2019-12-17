import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HomeIcon, SearchIcon } from "../../fragments";
import Search from "../Search";

const NavContainer = styled.div`
  height: 50px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacingXs};
`;

const IconContainer = styled.div`
  cursor: pointer;
`;

const SearchContainer = styled.div``;

const Navigation = () => {
  const [showSearch, toggleShowSearch] = useState(false);

  return (
    <NavContainer>
      <NavLink exact to={`/`}>
        <HomeIcon color="white" />
      </NavLink>
      <IconContainer onClick={() => toggleShowSearch(state => !state)}>
        <SearchIcon color="white" />
      </IconContainer>
      {/* <SearchContainer> */}
      <Search show={showSearch} />
      {/* </SearchContainer> */}
    </NavContainer>
  );
};

export default Navigation;
