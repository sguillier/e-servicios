
import React from "react"
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <NavBar />
    <h1>Hola Mundo</h1>
      <ItemListContainer greeting="Proximamente Los Productos y Servicios Apareceran Aquí" />
    </>
  );
}

export default App;
