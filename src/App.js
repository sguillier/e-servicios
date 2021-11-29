import { CartProvider } from "./context/CartContext";
import NavRoutes from "./routes/NavRoutes";


function App() {

  return (
      <CartProvider>
        <NavRoutes />
      </CartProvider>
  );
}

export default App;
