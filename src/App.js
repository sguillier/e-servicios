
// npm i react-router-dom

import React from "react"
import {CartProvider} from "./context/CartContext";
import Routes from "./routes/Routes";



function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
    
  );
}

export default App;
