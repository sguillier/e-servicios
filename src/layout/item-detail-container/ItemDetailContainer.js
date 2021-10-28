import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import promiseDataItems from '../../data/promiseDataItems.js'
import ItemDetail from '../../components/item-detail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()
    
    useEffect(() => {
        promiseDataItems
            .then((data) => {
                // console.log(data)
                const arrayItems = JSON.parse(data)
                setItem(arrayItems.find(e => e.itemId === parseInt(itemId)))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [itemId])

    
    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer
