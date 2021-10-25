import React, { useState } from 'react'
import "./ItemCount.css";


const ItemCount = ({ product }) => {

    const [count, setCount] = useState(1)

    const contratarHoras = () => {
        count === 0 ?
            alert(`Debes Seleccionar Una minima Cantidad De Horas`) :
            alert(`Contratar ${count} Horas de ${product.service} ofrecido por ${product.name}`)
    }

    const agrgarHorasCarrito = () => {
        count === 0 ?
            alert(`Debes Seleccionar Una minima Cantidad De Horas`) :
            alert(`Agregar al Carrito ${count} Horas de ${product.service} ofrecido por ${product.name}`)
    }

    
    return (
        <div className="item-count">
            <div className="item-count-add">
                <button
                    className="item-count-add-button"
                    onClick={() => { setCount(Math.max(count - 1, 0)) }}
                >-</button>
                <div>{count}</div>
                <button
                    className="item-count-add-button"
                    onClick={() => { setCount(Math.min(count + 1, product.stock)) }}
                >+</button>
            </div>
            <button
                className="item-count-button"
                onClick={contratarHoras}
            >
                Contratar Horas
            </button>
            <button
                className="item-count-button"
                onClick={agrgarHorasCarrito}
            >
                Agregar al Carrito
            </button>

        </div>
    )
}

export default ItemCount
