import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from "../../../context/CartContext";
import "./ItemCount.css";


const ItemCount = ({ item }) => {
    const cart = useContext(CartContext);
    const [quantityInCart, setQuantityInCart] = useState(cart.getQuantityByItemId(item.itemId))
    const [quantity, setQuantity] = useState(quantityInCart ? quantityInCart : item.min)


    const setItem = (add) => {
        if (item.min <= quantity + add && quantity + add <= item.max) {
            setQuantity(quantity + add)
            if (quantityInCart) {
                cart.addQuantityByItemId(item.itemId, add)
                setQuantityInCart(quantity)
            }
        }
    }



    const printInCart = (
        <>
            <div className="item-count-in-cart">
                <div className="item-count-in-cart-quantity">
                    <p> Tienes en el carrito </p>
                    <p className="item-count-in-cart-hours">
                        {(quantity > 1) ? (quantity + ' horas') : (quantity + ' hora')}
                    </p>
                    <p> de {item.name} </p>
                </div>
                <br/>
                <hr />
                <br/>
                <div className="item-count-in-cart-add">
                    Agregar Horas
                    <button
                        className="item-count-in-cart-add-button"
                        onClick={() => setItem(1)}
                    >+</button>
                </div>
                {/* <br /> */}
                <div className="item-count-in-cart-add">
                    Quitar Horas
                    <button
                        className="item-count-in-cart-add-button"
                        onClick={() => setItem(-1)}
                    >-</button>
                </div>
                <br />

                <button
                    className="item-count-in-cart-button-delete"
                    onClick={() => {
                        cart.removeByItemId(item.itemId)
                        setQuantityInCart(false)
                        setQuantity(item.min)
                    }}
                >
                    Eliminar del Carrito
                </button>
            </div>
            <br />
            <Link to="/cart">
                <button className="item-detail-button-exit">
                    Terminar la compra
                </button>
            </Link>
        </>
    )


    const printLocal = (
        <>
            <div className="item-count">
                <div className="item-count-add">
                    <button
                        className="item-count-add-button"
                        onClick={() => setItem(-1)}
                    >-</button>
                    <div>{quantity}</div>
                    <button
                        className="item-count-add-button"
                        onClick={() => setItem(1)}
                    >+</button>
                </div>
                <button
                    className="item-count-button"
                    onClick={() => {
                        cart.addItem(item, quantity)
                        setQuantityInCart(quantity)
                    }}
                >
                    Agregar al Carrito
                </button>


            </div>
        </>
    )


    return quantityInCart ? printInCart : printLocal
}

export default ItemCount
