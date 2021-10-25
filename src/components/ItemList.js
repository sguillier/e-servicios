import React, { useState, useEffect } from 'react'
import promiseProducts from '../data/promiseProducts.js'
import ItemCard from "./item-card/ItemCard";

const ItemList = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        promiseProducts
            .then((res) => {
                console.log(res)
                setProducts(JSON.parse(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="item-list">
                {products.map((product)=>( 
                    <ItemCard
                        product={product} 
                    /> 
                ))}
            </div>
        </>
    )
}

export default ItemList
