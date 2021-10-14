import React, {useState} from 'react'


const ItemCount = props => {

    const [count, setCount] = useState(props.initial)


    return (
        <div className="item">

            <div>
                {props.name}
            </div>
            <div className="item-count">
                <button 
                    className="item-count-add"
                    onClick={()=>{setCount(Math.max(count-1,0))}}
                >-</button>
                <div>{count}</div>
                <button 
                    className="item-count-add" 
                    onClick={()=>{setCount(Math.min(count+1, props.stock))}}
                >+</button>
            </div>
            <button 
                className="item-button"
                onClick={()=>{
                    count===0?
                    alert(`No hay Productos Seleccionado`):
                    alert(`Comprar ${count} Productos`)
                }}
            >
                Comprar
            </button>
            <button 
                className="item-button"
                onClick={()=>{
                    count===0?
                    alert(`No hay Productos Seleccionado`):
                    alert(`Agregar al Carrito ${count} Productos`)
                }}
            >
                
                Agregar al Carrito
            </button>

        </div>
    )
}

export default ItemCount
