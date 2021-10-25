import React from 'react'
import { useState, useEffect } from 'react'
import './ItemShedule.css'


const ItemShedule = ({ shedule }) => {
    console.log('Hola shedule', shedule)
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    const daysName = { mon: 'lu', tue: 'ma', wed: 'mi', thu: 'ju', fri: 'vi', sat: 'sa', sun: 'do' }
    const hrs = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]


    const items = []

    if (shedule) {
        const item = []
        item.push(<div className="shedule-clm-name"> hr </div>)
        hrs.forEach(hr => {
            item.push(<div className={"shedule-hr"} key={"hr-" + hr}> {hr + ':00'} </div>)
        })
        items.push(<div className="shedule-clm"> {item} </div>)

        days.forEach(day => {

            const item = []
            item.push(<div className="shedule-clm-name"> {daysName[day]} </div>)
            {
                hrs.forEach(hr => {
                    if (shedule[day].find(e => e == hr)) {
                        item.push(<div className={"shedule-on"} key={day + "-" + hr}> item </div>)
                    } else {
                        item.push(<div className={"shedule-off"} key={day + "-" + hr}>  item </div>)
                    }
                })
            }
            items.push(<div className="shedule-clm"> {item} </div>)
        });

    }


    return (
        <>
            {shedule ? (
                <>
                    <div className="shedule-container"> {items} </div>
                    <br />
                    <div className="shedule-leyend">
                        <p><span className={"shedule-on"}>item</span> Horarios potencialmente disponibles  </p>
                        <p><span className={"shedule-off"}>item</span> Horarios no disponibles </p>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default ItemShedule



