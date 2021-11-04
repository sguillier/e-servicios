import React, { useContext } from 'react'
import ItemCart from '../../components/item-cart/ItemCart';
import { CartContext } from "../../context/CartContext";
import './CartContainer.css'


const CartContainer = () => {
    const cart = useContext(CartContext);
    return (
        <>
        {cart.items.length!==0?
            <div className="cart-container">
                <h1> Carrito </h1>
                {cart.items?.map(e => (
                    <ItemCart
                        key={e.itemId}
                        itemId={e.itemId}
                        cart={cart}
                    />
                ))}
                <div className="cart-container-final">
                    <button
                        onClick={() => { cart.clearItems() }}
                        className="cart-container-button-clear"
                    >
                        Eliminar Todo
                    </button>
                    <h3 className="cart-container-total">
                        Total: ${cart.total} usd
                        <hr />
                    </h3>
                </div>
            </div>
            :<h2>El Carrito está vacío</h2>}
        </>
    )
}

export default CartContainer
