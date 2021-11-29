import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import ItemCart from '../../components/item-cart/ItemCart';
import { CartContext } from "../../context/CartContext";
import { fireAddOrder } from "../../firebase/firebase";
import './CartContainer.css';



const CartContainer = () => {
    const navigate = useNavigate()
    const cart = useContext(CartContext);
    const [out, setOut] = useState('case1')

    const addOrder = async () => {
        const items = cart.items.map(e => ({
            itemId: e.itemId,
            service: e.service,
            name: e.name,
            price: e.price,
            quantity: e.quantity
        }))

        const res = await fireAddOrder({
            items: items,
            total: cart.total
        })

        if (res === true) {
            setOut('case2')
            cart.clearItems()
        }

        if (res === false) {
            setOut('case3')
        }

    }

    const cartList = (
        <>
            <h2> Carrito </h2>
            {cart.items?.map(e => (
                <ItemCart
                    key={e.itemId}
                    itemId={e.itemId}
                    cart={cart}
                />
            ))}
            <div className="cart-container-final">
                <button
                    onClick={() => { cart.clearItems() }}
                    className="cart-container-button-clear"
                >
                    Eliminar Todo
                </button>
                <h3 className="cart-container-total">
                    Total: ${cart.total} usd
                    <hr />
                </h3>
            </div>
            <br />
            <button
                onClick={addOrder}
                className="cart-container-send-button"
            >
                Enviar Carrito
            </button>
        </>
    )



    let print
    switch (out) {
        case 'case1':
            print = cart.items.length !== 0 ? cartList : <h2>El Carrito está vacío</h2>
            break;

        case 'case2':
            print = <h2>Carrito Enviado Con Exito</h2>
            break;

        case 'case3':
            print = (
                <div>
                    <h3>
                        Para continuar con el envío debes {' '}
                        <span
                            onClick={() => navigate('/auth', { state: { nextRoute: '/cart' } })}
                            className="span-link"
                        >
                            inicia sesión
                        </span>
                    </h3>
                </div>
            )
            break;
        default:
            print = null
            break;
    }


    return (
        <div className="cart-container">
            {print}
        </div>
    )
}

export default CartContainer
