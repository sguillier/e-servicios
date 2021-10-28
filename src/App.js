
// npm i react-router-dom

import React from "react"
import NavBar from "./components/nav-bar/NavBar";
import ItemListContainer from "./layout/item-list-container/ItemListContainer";
import ItemDetailContainer from "./layout/item-detail-container/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Title from "./components/title/Title";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Title />
      <Switch>
        <Route path="/" exact>
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId" exact>
          <ItemDetailContainer />
        </Route>
        <Route path="/category/:categoryId" exact>
          <ItemListContainer />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
