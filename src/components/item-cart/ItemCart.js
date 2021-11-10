import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ItemCart.css'

const ItemCart = ({ itemId, cart }) => {
    const item = cart.items.find(e => e.itemId === itemId)

    const [quantity, setQuantity] = useState(item.quantity)

    const setItem = (add) => {
        if( item.min <= quantity + add && quantity + add <= item.max ){
            setQuantity(quantity + add)
            cart.setQuantityItem(item.itemId, add)
        }
    }

    
    return (
        <div className="item-cart">

            <div className="item-cart-detail">

                <Link to={"/item/" + item.itemId} className="item-cart-detail-service">
                    <div className="item-cart-img-container">
                        <img
                            className="item-cart-img"
                            src={item.urlPhoto}
                            alt={item.name}
                        />
                    </div>
                    <div className="item-cart-text">
                        <div className="item-cart-service"> {item.service} </div>
                        <div className="item-cart-name"> {item.name} </div>
                        <div className="item-cart-price"> ${item.price} usd </div>
                    </div>
                </Link>

                <div className="item-cart-shopping">
                    <div className="item-cart-quantity">
                        {/* <div> Cantidad </div> */}
                        <button className="item-cart-add-button" onClick={() => setItem(1)} >
                            +
                        </button>
                        <button className="item-cart-add-button" onClick={() => setItem(-1)} >
                            -
                        </button>
                        <div> Cantidad : {quantity} </div>
                    </div>
                    <hr />
                    <div className="item-cart-cost">
                        Costo: ${item.price * quantity} usd
                    </div>
                </div>

            </div>

            <div className="item-cart-button-remove-container">
                <button className="item-cart-button-remove" onClick={() => cart.removeItem(item.itemId)} >
                    X
                </button>
            </div>

        </div>
    )
}

export default ItemCart
