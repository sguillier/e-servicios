import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContext";

const ItemCart = ({ item }) => {

    const { contextRemoveItem } = useContext(CartContext);


    // console.log(item)
    return (
        <div>
            <p> {item.name} {item.quantity} </p>
            <button
                onClick={()=>contextRemoveItem(item.itemId)}
            >
                Eliminar
            </button>
        </div>
    )
}

export default ItemCart
