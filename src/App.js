
import React from "react"
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <NavBar />
    <h1>Hola Facu</h1>
    <ItemListContainer />
    <ItemCount name="Horas" stock={5} initial={1} />
    </>
  );
}

export default App;
