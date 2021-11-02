import React, { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";


const ItemCount = ({ addToCart, item }) => {

    const [count, setCount] = useState(item.min)
    const { contextAddItem } = useContext(CartContext);
    
    return (
        <div className="item-count">
            <div className="item-count-add">
                <button
                    className="item-count-add-button"
                    onClick={() => { setCount(Math.max(count - 1, item.min)) }}
                >-</button>
                <div>{count}</div>
                <button
                    className="item-count-add-button"
                    onClick={() => { setCount(Math.min(count + 1, item.max)) }}
                >+</button>
            </div>
            <button 
                className="item-count-button"
                // onClick={()=>contextAddItem(item, count)}
                onClick={()=>{
                    contextAddItem(item, count)
                    addToCart(count)
                }}
            >
                Agregar al Carrito
            </button>

        </div>
    )
}

export default ItemCount
