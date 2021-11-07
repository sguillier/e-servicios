import React from 'react'
import promiseDataItems from './promiseDataItems.js'
import { db } from "../firebase/Init"
import { collection, addDoc } from "firebase/firestore";


const Prueba = () => {

    const upDateItem = async (item) => {
        try {
            const docRef = await addDoc(collection(db, "items"), {
                service: item.service,
                name: item.name,
                price: item.price,
                urlPhoto: item.urlPhoto,
                description: item.description,
                curriculum: item.curriculum,
                categoryId: item.categoryId,
                shedule: item.shedule,
                min: item.min,
                max: item.max
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const upDate = async () => {
        alert("Precaucion! esto escribe sobre FireStore, se duplicaran los datos")
        const query = await promiseDataItems
        const items = await JSON.parse(query)
        //console.log('items: ', items)

        items.forEach(item => upDateItem(item));
    }


    return (
        <>
            <h2>Carga Data</h2>
            <br />
            <hr />
            <br />
            <button
                onClick={upDate}
            >
                Subir Data a Firestore
            </button>
        </>
    )


}

export default Prueba







// import React, { useState, useEffect } from 'react'
// import { db } from "../firebase/Init"

// import { collection, getDocs } from "firebase/firestore";

// const Prueba = () => {
//     const [items, setItems] = useState([])

//     useEffect(async () => {
//         try {
//             const data = await getDocs(collection(db, "items"));
//             const arrayData = data.docs.map(doc => ({ itemId: doc.id, ...doc.data() }))
//             setItems(arrayData)
//             console.log('arrayData: ', arrayData)
//         } catch (error) {
//             console.log('error: ', error)
//         }

//     }, [])

//     return (
//         <div>
//             <h1>Hola Mundo</h1>
//             {items.map((item) => (
//                 <p> {item.service} </p>
//             ))}
//         </div>
//     )
// }

// export default Prueba
