import React, {useState} from 'react'


const ItemCount = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="item-count">
            <button 
                className="item-count-add"
                onClick={()=>{setCount(Math.max(count-1,0))}}
            >-</button>
            <div>{count}</div>
            <button 
                className="item-count-add" 
                onClick={()=>{setCount(Math.min(count+1,10))}}
            >+</button>
        </div>
    )
}

export default ItemCount
