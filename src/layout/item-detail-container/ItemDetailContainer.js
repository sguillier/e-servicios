import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../../components/item-detail/ItemDetail'
import { fireGetItemById } from "../../firebase/firebase"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        const ejecuta = async () => {
            setItem(await fireGetItemById(itemId))
        }
        ejecuta()
    }, [itemId])


    return (
        <>
            {item ?
                <ItemDetail item={item} />
                : null
            }
        </>
    )
}

export default ItemDetailContainer
