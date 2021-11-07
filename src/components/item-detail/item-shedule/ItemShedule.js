import React from 'react'
import './ItemShedule.css'


const ItemShedule = ({ shedule }) => {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    const daysName = { mon: 'lu', tue: 'ma', wed: 'mi', thu: 'ju', fri: 'vi', sat: 'sa', sun: 'do' }
    const hrs = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]


    const cells = []

    if (shedule) {
        const cell = []
        cell.push(<div className="shedule-clm-name" key="hr"> hr </div>)
        hrs.forEach(hr => {
            cell.push(<div className={"shedule-hr"} key={"hr-" + hr}> {hr + ':00'} </div>)
        })
        cells.push(<div className="shedule-clm" key="hrs"> {cell} </div>)

        days.forEach(day => {
            const cell = []
            cell.push(<div className="shedule-clm-name" key={day+"name"}> {daysName[day]} </div>)

            hrs.forEach(hr => {
                const state = (shedule[day]?.includes(hr))?"on":"off"
                cell.push(<div className={"shedule-" + state} key={day + "-" + hr}> cell </div>)
            })

            cells.push(<div className="shedule-clm" key={day}> {cell} </div>)
        });

        return (
            <>
                <div className="shedule-container"> {cells} </div>
                <br />
                <div className="shedule-leyend">
                    <p><span className={"shedule-on"}>item</span> Horarios potencialmente disponibles sujetos a confirmacion </p>
                    <p><span className={"shedule-off"}>item</span> Horarios no disponibles </p>
                </div>

            </>
        )
    }

    return null


}

export default ItemShedule



