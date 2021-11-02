
import { createContext, useState } from 'react'
export const CartContext = createContext([])


export const CartProvider = ({ children }) => {
    const [contextCartItems, setContextCartItems] = useState([]);

    const contextIsInCart = (itemId) => {
        return contextCartItems.find(e => e.itemId === itemId) ? true : false;
    };

    const contextAddItem = (item, quantity) => {
        if (!contextIsInCart(item.itemId)) {
            setContextCartItems([...contextCartItems, { ...item, quantity }])
        }
    };

    const contextRemoveItem = (itemId) => {
        const items = contextCartItems.filter(e => e.itemId !== itemId)
        setContextCartItems(items);
    };

    const contextClearItems = () => {
        setContextCartItems([]);
    }
    
    return (
        <CartContext.Provider
            value={{
                contextCartItems,
                contextIsInCart,
                contextRemoveItem,
                contextAddItem,
                contextClearItems
            }}
        >
            {children}
        </CartContext.Provider>

    )
}


