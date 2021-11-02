import React from 'react'
import './ItemPrice.css'

const ItemPrice = ({price}) => {
    return (
        <div className="item-price">
            {price}
        </div>
    )
}

export default ItemPrice
