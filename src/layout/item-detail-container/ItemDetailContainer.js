import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../../components/item-detail/ItemDetail'
import { db } from "../../firebase/Init"
import { doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        const ejecuta = async () => {
            try {
                const docSnap = await getDoc(doc(db, "items", itemId));
                setItem({ itemId: itemId, ...docSnap.data() })
            } catch (error) {
                console.log('error: ', error)
            }
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
