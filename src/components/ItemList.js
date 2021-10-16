import React, { useState, useEffect } from 'react'
import promiseProducts from '../data/promiseProducts.js'
import ItemCount from "../components/ItemCount";

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
            <div>
                {products.map((product)=>( 
                    <ItemCount
                        product={product} 
                    /> 
                ))}
            </div>
        </>
    )
}

export default ItemList
