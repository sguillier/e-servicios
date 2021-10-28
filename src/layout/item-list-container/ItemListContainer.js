import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import promiseDataItems from '../../data/promiseDataItems.js'
import promiseCategorys from '../../data/promiseCategorys.js'
import ItemCard from "../../components/item-card/ItemCard";


const ItemListContainer = () => {
    const { categoryId } = useParams()

    const [items, setItems] = useState([])
    useEffect(() => {
        promiseDataItems
            .then((data) => {
                const arrayItems = JSON.parse(data)
                // console.log(arrayItems)
                if (categoryId) {
                    setItems(arrayItems.filter(e => e.categoryId === categoryId))
                } else {
                    setItems(arrayItems)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoryId])


    const [categoryName, setCategoryName] = useState(null)
    useEffect(() => {
        if (categoryId) {
            // console.log(categoryId)
            promiseCategorys
                .then((data) => {
                    const arrayCategorys = JSON.parse(data)
                    const objetCategory = arrayCategorys.find(e => e.categoryId === categoryId)
                    setCategoryName(objetCategory.name)
                })
                .catch((err) => {
                    console.log(err)
                })
        }else{
            setCategoryName(null)
        }
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
