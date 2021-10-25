import React from 'react'
import ItemCount from '../item-count/ItemCount'
import './ItemCard.css'


const ItemCard = ({ product }) => {

    const linkServicio = () => {
        alert(`Aqui entrariamos a ver detalle del seervicio de ${product.service} ofrecido por ${product.name}`)
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
            <ItemCount
                product={product} 
            />
        </div>
    )
}

export default ItemCard
