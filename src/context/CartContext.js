
import { createContext, useState } from 'react'
export const CartContext = createContext([])


export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);


    const isInCart = (itemId) => {
        return items.find(e => e.itemId === itemId) ? true : false;
    };

    const addItem = (item, quantity) => {
        if (!isInCart(item.itemId)) {
            setItems([...items, { ...item, quantity }])
            setTotalQuantity(totalQuantity + quantity)
            setTotal(total + quantity * item.price)
        }
    };

    const setQuantityItem = (itemId, add) => {
        if (isInCart(itemId)) {
            const array = items
            for (let i = 0; i < items.length; i++) {
                if (array[i].itemId === itemId) {
                    array[i].quantity += add
                    // console.log(array[i].quantity)
                    setTotalQuantity(totalQuantity + add)
                    setTotal(total + add*array[i].price)
                    // break
                }
            }
            setItems(array);
        }
    };

    const removeItem = (itemId) => {
        if (isInCart(itemId)) {
            const itemOut = items.find(e => e.itemId === itemId)
            setTotalQuantity(totalQuantity - itemOut.quantity)
            setTotal(total - itemOut.quantity * itemOut.price)

            const newArray = items.filter(e => e.itemId !== itemId)
            setItems(newArray);
        }
    };

    const clearItems = () => {
        setItems([]);
        setTotalQuantity(0)
        setTotal(0)
    }

    return (
        <CartContext.Provider
            value={{
                items,
                total,
                totalQuantity,
                isInCart,
                removeItem,
                addItem,
                setQuantityItem,
                clearItems
            }}
        >
            {children}
        </CartContext.Provider>

    )
}


