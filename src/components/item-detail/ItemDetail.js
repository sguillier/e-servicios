import React, { useState, useEffect } from 'react'
import promiseProducts from '../../data/promiseProducts.js'
import ItemCount from '../item-count/ItemCount.js';
import ItemShedule from './item-shedule/ItemShedule.js';
import './ItemDetail.css'


const ItemDetail = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        promiseProducts
            .then((res) => {
                // console.log(res)
                const arrayProducts = JSON.parse(res)
                setProduct(arrayProducts.find(e => e.id === 2))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    return (
        <>
            {product ?
                <div className="item-detail-grid-container">
                    <div className="item-detail-grid-a">
                        <h3>{product.service}</h3>
                        <h3 className="item-detail-name">{product.name}</h3>
                        <img className="item-detail-img" src={product.urlPhoto} />
                        <ItemCount product={product} />
                        <p className="item-detail-price">{product.price} la hora</p>
                    </div>
                    <div className="item-detail-grid-b">
                        <h3>Descripción</h3>
                        <br />
                        <p>{product.description}</p>
                        <br />
                        <h3>Curriculum</h3>
                        <br />
                        <p>{product.curriculum}</p>
                    </div>
                    <div className="item-detail-grid-c">
                        <h3>Disponibilidad Horaria</h3>
                        <br />
                        <p>
                            El siguiente cuadro muestran las franjas horarias en las que {product.name} tiene disponibilidad de tiempo.
                            Sin embargo, los horarios señalados son solo referenciales y estan sujetos a la confirmación de {product.name}.
                        </p>
                        <br />
                        <ItemShedule shedule={product.shedule} />
                    </div>

                </div>
                : null}
        </>
    )
}

export default ItemDetail
