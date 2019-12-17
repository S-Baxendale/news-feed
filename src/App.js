import React from "react";
import { Route } from "react-router-dom";
import TopStories from "./components/blocks/TopStories";
import SearchResults from "./components/blocks/SearchResults";
import Navigation from "./components/blocks/Navigation";
import styled from "styled-components";
import NewsDetail from "./components/blocks/NewsDetail";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colorSecondary};
  padding: ${({ theme }) => theme.spacingMd};
  min-height: 100vh;
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    padding: ${({ theme }) => theme.spacingXs};
  }
`;

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Route path="/" exact component={TopStories} />
      <Route path="/search" exact component={SearchResults} />
      <Route path="/articles/:id" exact component={NewsDetail} />
    </AppContainer>
  );
}

export default App;
