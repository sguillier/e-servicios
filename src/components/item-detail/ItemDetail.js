import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount.js';
import ItemShedule from './item-shedule/ItemShedule.js';
import './ItemDetail.css'



const ItemDetail = ({ item }) => {
    const [showCount, setShowCount] = useState(true)
    const addToCart = (count) => {
        setShowCount(false)
    }

    if (item) {

        return (
            <div className="item-detail-grid-container">
                <div className="item-detail-grid-a">
                    <h3>{item.service}</h3>
                    <h3 className="item-detail-name">{item.name}</h3>
                    <br />
                    <img
                        className="item-detail-img"
                        src={item.urlPhoto}
                        alt={item.name}
                    />
                    <br />
                    <p className="item-detail-price">{item.price} la hora</p>
                    <br />
                    {showCount ? (
                        <>
                            <ItemCount addToCart={addToCart} item={item} />
                            <br />
                        </>
                    ) : null}
                    <Link to="/cart">
                        <button className="item-detail-button-exit">
                            Terminar la compra
                        </button>
                    </Link>
                </div>
                <div className="item-detail-grid-b">
                    <h3>Descripción</h3>
                    <br />
                    <p>{item.description}</p>
                    <br />
                    <h3>Curriculum</h3>
                    <br />
                    <p>{item.curriculum}</p>
                </div>
                <div className="item-detail-grid-c">
                    <h3>Disponibilidad Horaria</h3>
                    <br />
                    <p>
                        El siguiente cuadro muestran las franjas horarias en las que {item.name} tiene disponibilidad de tiempo.
                        Sin embargo, los horarios señalados son solo referenciales y estan sujetos a la confirmación de {item.name}.
                    </p>
                    <br />
                    <ItemShedule shedule={item.shedule} />
                </div>

            </div>

        )
    }

    return null
}

export default ItemDetail
