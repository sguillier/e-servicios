import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import promiseCategorys from '../../data/promiseCategorys.js'
import ItemCard from "../../components/item-card/ItemCard";
import { db } from "../../firebase/Init"
import { collection, query, where, getDocs } from "firebase/firestore";



const ItemListContainer = () => {
    const { categoryId } = useParams()

    const [items, setItems] = useState([])
    useEffect(() => {
        const ejecuta = async () => {
            try {
                if (categoryId) {
                    const querySnap = await getDocs(query(collection(db, "items"), where("categoryId", "==", categoryId)));
                    const arrayItems = querySnap.docs.map(doc => ({ itemId: doc.id, ...doc.data() }))
                    setItems(arrayItems)
                } else {
                    const querySnap = await getDocs(collection(db, "items"));
                    const arrayItems = querySnap.docs.map(doc => ({ itemId: doc.id, ...doc.data() }))
                    setItems(arrayItems)
                }
            } catch (error) {
                console.log('error: ', error)
            }
        }
        ejecuta()

    }, [categoryId])


    const [categoryName, setCategoryName] = useState(null)
    useEffect(() => {
        if (categoryId) {
            promiseCategorys
                .then((data) => {
                    const arrayCategorys = JSON.parse(data)
                    const objetCategory = arrayCategorys.find(e => e.categoryId === categoryId)
                    setCategoryName(objetCategory.name)
                })
                .catch((err) => {
                    console.log(err)
                })
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
