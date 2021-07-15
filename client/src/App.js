import React from 'react';
import { Route } from "react-router-dom";
import Landing from "./components/landing";
import Details from "./components/details";
import Recipes from "./components/recipes";
import Create from "./components/recipes/create-recipe"
function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Recipes} />
      <Route exact path="/home/details/:id" render={(match) => <Details match={match} />} />
      <Route exact path="/home/create" component={Create} />
    </div>
  );
}

export default App;
