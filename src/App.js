import React from "react";
import { Route } from "react-router-dom";
import TopStories from "./components/blocks/TopStories";
import Search from "./components/blocks/Search";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colorSecondary};
  padding: ${({ theme }) => theme.spacingXs};
`;

function App() {
  return (
    <AppContainer>
      <Search />
      <Route path="/" exact component={TopStories} />
    </AppContainer>
  );
}

export default App;
