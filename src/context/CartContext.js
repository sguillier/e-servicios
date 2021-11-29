
import { createContext, useState } from 'react'
export const CartContext = createContext([])


export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);


    const getQuantityByItemId = (itemId) => {
        const item = items.find(e => e.itemId === itemId)
        if( item ){
            return item.quantity
        }else{
            return false;
        }
    };

    const addItem = (item, quantity) => {
        if (!getQuantityByItemId(item.itemId)) {
            setItems([...items, { ...item, quantity }])
            setTotalQuantity(totalQuantity + quantity)
            setTotal(total + quantity * item.price)
        }
    };

    const addQuantityByItemId = (itemId, add) => {
        if (getQuantityByItemId(itemId)) {
            const array = items
            for (let i = 0; i < items.length; i++) {
                if (array[i].itemId === itemId) {
                    array[i].quantity += add
                    setTotalQuantity(totalQuantity + add)
                    setTotal(total + add*array[i].price)
                }
            }
            setItems(array);
        }
    };

    const removeByItemId = (itemId) => {
        if (getQuantityByItemId(itemId)) {
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
                getQuantityByItemId,
                removeByItemId,
                addItem,
                addQuantityByItemId,
                clearItems
            }}
        >
            {children}
        </CartContext.Provider>

    )
}


