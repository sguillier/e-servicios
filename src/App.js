
// npm i react-router-dom

import React from "react"
import {CartProvider} from "./components/context/CartContext";
import Routes from "./components/Routes/Routes";



function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
    
  );
}

export default App;
