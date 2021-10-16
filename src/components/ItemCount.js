import React, {useState} from 'react'


const ItemCount = ({product}) => {

    const [count, setCount] = useState(1)


    return (
        <div className="item-card">

            <div>
                <p className="item-service">
                    {product.service}
                </p>
                <p className="item-name">
                    {product.name}
                </p>
                    
            </div>
            <div className="item-count">
                <button 
                    className="item-count-add"
                    onClick={()=>{setCount(Math.max(count-1,0))}}
                >-</button>
                <div>{count}</div>
                <button 
                    className="item-count-add" 
                    onClick={()=>{setCount(Math.min(count+1, product.stock))}}
                >+</button>
            </div>
            <button 
                className="item-button"
                onClick={()=>{
                    count===0?
                    alert(`Debes Seleccionar Una minima Cantidad De Horas`):
                    alert(`Contratar ${count} Horas de ${product.service} ofrecidas por ${product.name}`)
                }}
            >
                Contratar Horas
            </button>
            <button 
                className="item-button"
                onClick={()=>{
                    count===0?
                    alert(`Debes Seleccionar Una minima Cantidad De Horas`):
                    alert(`Agregar al Carrito ${count} Horas de ${product.service} ofrecidas por ${product.name}`)
                }}
            >
                Agregar al Carrito 
            </button>

        </div>
    )
}

export default ItemCount
