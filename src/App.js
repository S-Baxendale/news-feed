import React from "react";
import { Route } from "react-router-dom";
import TopStories from "./components/blocks/TopStories";
import SearchResults from "./components/blocks/SearchResults";
import Navigation from "./components/blocks/Navigation";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colorSecondary};
  padding: ${({ theme }) => theme.spacingXs};
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Route path="/" exact component={TopStories} />
      <Route path="/search" exact component={SearchResults} />
    </AppContainer>
  );
}

export default App;
