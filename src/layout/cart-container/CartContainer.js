import React, { useContext } from 'react'
import ItemCart from '../../components/item-cart/ItemCart';
import { CartContext } from "../../context/CartContext";


const CartContainer = () => {
    const { contextCartItems, contextClearItems } = useContext(CartContext);
    return (
        <div>
            <h1> Carrito </h1>
            {contextCartItems?.map(e=> (
                <ItemCart key={e.itemId} item={e}/>
            ))}
            <button
                onClick={()=>{contextClearItems()}}
            >Eliminar Todo</button>
        </div>
    )
}

export default CartContainer
