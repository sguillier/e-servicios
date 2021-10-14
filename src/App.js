
import React from "react"
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <NavBar />
    <h1>Hola Mundo</h1>
    <ItemListContainer />
    <ItemCount />
    </>
  );
}

export default App;
