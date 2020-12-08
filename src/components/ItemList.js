/* 

    CURSO: React
    Desafio N° 11 Clase 12 Firebase
    Estudiante: José Miguel Molina Rondón

    Traigo los productos por context con productosFirebase

*/

import React, { useState, useEffect } from 'react';
import Item from './Item'
import useCartContext from '../context/useCartContext';
//import './App.css';

const ItemList = () => {
    const [cargando, setCargando] = useState(true);
    const [productos, setProductos] = useState();

    const { productosFirebase } = useCartContext();

    //PEDIDO DE DATOS AL INICIAR EL COMPONENTE
    useEffect(() => {
        getProductos();
        //return () => {console.log(getProductos())}
    }, []);

    //TRAYENDOME DEL CONTEXTO LOS DATOS DEL FIREBASE
    const getProductos = () => {
        setTimeout(() => {
            setProductos(productosFirebase);
            setCargando(false);
        }, 2000);
        return () => { };
    }


    return <>
        <div className="App">
            <h1>Discografías</h1>

            {cargando ? <h3>Loading...</h3>
                : <Item atributo={productos} />
            }
        </div>
    </>
}

export default ItemList;







//FUNCION PARA CONSULTAR LOS PRODUCTOS DESDE MI JSON
// const getProductos = () => {

//     setTimeout(() => {
//         // Utilizo mi json generado en typicode
//         const url = 'https://my-json-server.typicode.com/jmmolinar/json/discografia';
//         fetch(url)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((response) => {
//                 setProductos(response);
//                 setCargando(false);
//             });
//     }, 2000);
//     return () => {};
// }