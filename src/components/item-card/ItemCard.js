import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'
import ItemPrice from '../item-price/ItemPrice'


const ItemCard = ({ item }) => {

    return (
        <div className="item-card">
            <Link to={"/item/" + item.itemId} className="item-card-service">
                <h4>
                    {item.service}
                </h4>
            </Link>

            <h4 className="item-card-name">
                {item.name}
            </h4>

            <Link to={"/item/" + item.itemId} className="item-card-service">
                <div className="item-card-img-container">
                    <img
                        className="item-card-img"
                        src={item.urlPhoto}
                        alt={item.name}
                    />
                </div>
            </Link>

            <ItemPrice price={item.price} />

        </div>
    )
}

export default ItemCard
