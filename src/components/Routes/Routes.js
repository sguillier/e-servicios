import React from 'react'
import NavBar from "../nav-bar/NavBar";
import ItemListContainer from "../../layout/item-list-container/ItemListContainer";
import ItemDetailContainer from "../../layout/item-detail-container/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Title from "../title/Title";
import CartContainer from '../../layout/cart-container/CartContainer';



const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Title />
                <Switch>
                    <Route path="/" exact>
                        <ItemListContainer />
                    </Route>
                    <Route path="/item/:itemId" exact>
                        <ItemDetailContainer />
                    </Route>
                    <Route path="/category/:categoryId" exact>
                        <ItemListContainer />
                    </Route>
                    <Route path="/cart" exact>
                        <CartContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
