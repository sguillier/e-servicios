import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemCard from "../../components/item-card/ItemCard";
import { fireGetItemsByCategoryId } from "../../firebase/firebase"
import { getNameByCategoryId } from '../../data/Categorys.js';




const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [categoryName, setCategoryName] = useState(null)

    useEffect(() => {
        const ejecuta = async () => {
            setItems(await fireGetItemsByCategoryId(categoryId))
            setCategoryName( getNameByCategoryId(categoryId) )
        }
        ejecuta()
    }, [categoryId])




    return (
        <>
            <h2>{categoryName}</h2>
            <div className="item-list-container">
                {items.map((item) => (
                    <ItemCard
                        key={item.itemId}
                        item={item}
                    />
                ))}
            </div>
        </>
    )


}

export default ItemListContainer
