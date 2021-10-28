import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import promiseCategorys from '../../../data/promiseCategorys.js'
import './Dropdown.css'

const Dropdown = () => {
    const [active, setActive] = useState(false);

    const [categorys, setCategorys] = useState([])
    useEffect(() => {
        promiseCategorys
            .then((data) => {
                setCategorys(JSON.parse(data))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <div
                className="dd-wrapper"
                onMouseOver={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <div className="dd-header">
                    Categorias
                </div>
                {active ? (
                    <div className={"dd-list "}>
                        {categorys.map(category => (
                            <NavLink to={"/category/" + category.categoryId}
                                activeClassName="dd-list-item-active"
                                className="dd-list-item"
                                key={category.categoryId}
                                onClick={() => setActive(false)}
                            >
                                {category.name}
                            </NavLink>
                        ))}
                    </div>) : null}
            </div>
        </div>
    )
}

export default Dropdown
