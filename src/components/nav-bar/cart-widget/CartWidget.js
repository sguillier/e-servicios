import React, { useContext } from 'react'
import { ReactComponent as CartSvg } from "../../../svg/cart.svg";
import { CartContext } from "../../../context/CartContext";
import './CartWidget.css'
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const cart = useContext(CartContext);

    return (
        <Link to="/cart">
            <div className="cart-widget-container">
                <div className="cart-widget-total-container">
                    <div className="cart-widget-total">
                        {(cart.totalQuantity < 10) ?
                            cart.totalQuantity :
                            '9+'
                        }
                    </div>
                </div>
                <div className="cart-widget-svg">
                    <CartSvg />
                </div>
            </div>
        </Link>
    )
}

export default CartWidget
