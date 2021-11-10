import React, { useContext, useState } from 'react'
import ItemCart from '../../components/item-cart/ItemCart';
import { CartContext } from "../../context/CartContext";
import './CartContainer.css';
import { db } from "../../firebase/Init";
import { collection, addDoc } from "firebase/firestore";


const CartContainer = () => {
    const cart = useContext(CartContext);
    const [msg, setMsg] = useState(cart.items.length===0?"El Carrito está vacío":null)

    const addOrder = async () =>{
        const buyer = {
            name: "Sebastian",
            email: "sebastian@correo.com"
        }
        const items = cart.items.map( e => ({ 
            itemId:e.itemId, 
            service:e.service, 
            name:e.name, 
            price:e.price, 
            quantity:e.quantity 
        }))

        const newOrder = { 
            buyer: buyer,
            items: items,
            total: cart.total
        }

        
        const docRef = await addDoc(collection(db, "orders"), newOrder);
        console.log("Document written with ID: ", docRef.id);
        
        cart.clearItems()
        
        setMsg("Carrito Enviado Con Exito")
    }

    return (
        <div className="cart-container">
            {!msg?
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
                <button onClick={addOrder}>
                    Enviar Carrito
                </button>
                </>
            :<h2>{msg}</h2>}
        </div>
    )
}

export default CartContainer
