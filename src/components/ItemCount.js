import React, { useState } from 'react'


const ItemCount = ({ product }) => {

    const [count, setCount] = useState(1)

    const contratarHoras = () => {
        count === 0 ?
            alert(`Debes Seleccionar Una minima Cantidad De Horas`) :
            alert(`Contratar ${count} Horas de ${product.service} ofrecidas por ${product.name}`)
    }

    const agrgarHorasCarrito = () => {
        count === 0 ?
            alert(`Debes Seleccionar Una minima Cantidad De Horas`) :
            alert(`Agregar al Carrito ${count} Horas de ${product.service} ofrecidas por ${product.name}`)
    }

    const linkServicio = () => {
        alert(`Aqui entrariamos a ver detalle del seervicio de ${product.service} ofrecidas por ${product.name}`)
    }


    return (
        <div className="item-card">

            <div>
                <p 
                    className="item-service"
                    onClick={linkServicio}
                >
                    {product.service}
                </p>
                <p className="item-name">
                    {product.name}
                </p>

            </div>
            <div className="item-count">
                <button
                    className="item-count-add"
                    onClick={() => { setCount(Math.max(count - 1, 0)) }}
                >-</button>
                <div>{count}</div>
                <button
                    className="item-count-add"
                    onClick={() => { setCount(Math.min(count + 1, product.stock)) }}
                >+</button>
            </div>
            <button
                className="item-button"
                onClick={contratarHoras}
            >
                Contratar Horas
            </button>
            <button
                className="item-button"
                onClick={agrgarHorasCarrito}
            >
                Agregar al Carrito
            </button>

        </div>
    )
}

export default ItemCount
