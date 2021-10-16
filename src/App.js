
import React from "react"
import ItemList from "./components/ItemList";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <NavBar />
    <h1>Hola Mundo</h1>
    <ItemListContainer>
      <ItemList/>
    </ItemListContainer>
    </>
  );
}

export default App;
