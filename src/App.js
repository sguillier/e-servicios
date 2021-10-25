
import React from "react"
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/item-detail/ItemDetail";
import ItemListContainer from "./layout/ItemListContainer";
import ItemDetailContainer from "./layout/ItemDetailContainer";



function App() {
  return (
    <>
    <NavBar />
    <h1>Hola Mundo</h1>
    {/* <ItemListContainer>
      <ItemList/>
    </ItemListContainer> */}
    <ItemDetailContainer>
      <ItemDetail/>
    </ItemDetailContainer>
    </>
  );
}

export default App;
