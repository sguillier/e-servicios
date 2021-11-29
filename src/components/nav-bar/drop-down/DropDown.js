import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { categorys } from '../../../data/Categorys.js';
import './DropDown.css'

const DropDown = () => {
    const [active, setActive] = useState(false);


    return (
        <div className="dd-container">
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
                                className={({ isActive }) => "dd-list-item" + (isActive ? " dd-list-item-active" : "")}
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

export default DropDown
