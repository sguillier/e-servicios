import NavBar from "../components/nav-bar/NavBar";
import ItemListContainer from "../layout/item-list-container/ItemListContainer";
import ItemDetailContainer from "../layout/item-detail-container/ItemDetailContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Title from "../components/title/Title";
import CartContainer from '../layout/cart-container/CartContainer';
import AuthContainer from '../layout/auth-container/AuthContainer';
import CuatroCientosCuatro from '../layout/cuatro-cientos-cuatro/CuatroCientosCuatro';




const NavRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Title />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/cart" element={<CartContainer />} />
                    <Route path="/auth" element={<AuthContainer />} />
                    <Route path="/404" element={<CuatroCientosCuatro />} />
                    <Route path="*" element={<Navigate to='/404' />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NavRoutes
