import React from "react";
import { Route } from "react-router-dom";
import TopStories from "./components/blocks/TopStories";

function App() {
  return (
    <div>
      <Route path="/" exact component={TopStories} />
    </div>
  );
}

export default App;
