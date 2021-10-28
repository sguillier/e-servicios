import React from 'react'
import ItemCount from '../item-count/ItemCount'
import './ItemCard.css'
import { Link } from 'react-router-dom'


const ItemCard = ({ item }) => {

    return (
        <div className="item-card">
            <div>
                <Link to={"/item/" + item.itemId} className="item-card-service">
                    <h4>
                        {item.service}
                    </h4>
                </Link>

                <p className="item-card-name">
                    {item.name}
                </p>

                <Link to={"/item/" + item.itemId} className="item-card-service">
                    <div className="item-car-img-container">
                        <img
                            className="item-card-img"
                            src={item.urlPhoto}
                            alt={item.name}
                        />
                    </div>
                </Link>

            </div>
            <ItemCount
                item={item}
            />
        </div>
    )
}

export default ItemCard
