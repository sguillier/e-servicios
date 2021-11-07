
import React from "react"
import {CartProvider} from "./context/CartContext";
import Routes from "./routes/Routes";
// import Prueba from "./data/Prueba";


function App() {


  return (
    <CartProvider>
      <Routes />
    </CartProvider>
    // <Prueba />
  );
}

export default App;
