import './ItemListContainer.css'
import Title from '../Title/Title'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const products = [
    {
        id: 1, 
        productName: "Carpa de 1.0m", 
        productPrice: 5000, 
        pictureUrl: "https://i.imgur.com/einJcWE.jpg", 
        pictureAlt: "Foto de carpita",
        baseSize: 1.0,
        height: 1.55
    },
    {
        id: 2, 
        productName: "Carpa de 1.2m", 
        productPrice: 6000, 
        pictureUrl: "https://i.imgur.com/Bn3S1XW.jpg", 
        pictureAlt: "Foto de carpita",
        baseSize: 1.2,
        height: 1.7
    },
    {
        id: 3, 
        productName: "Carpa de 1.5m", 
        productPrice: 7000, 
        pictureUrl: "https://i.imgur.com/aU2fbpL.jpg", 
        pictureAlt: "Foto de carpita",
        baseSize: 1.5,
        height: 1.7
    },
    {
        id: 4, 
        productName: "Carpa de 2.0m", 
        productPrice: 8000, 
        pictureUrl: "https://i.imgur.com/TIUTU4Z.jpg", 
        pictureAlt: "Foto de carpita",
        baseSize: 2.0,
        height: 1.85
    }
]


function ItemListContainer() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 500);
        })

        getData.then(res => setData(res))

    }, [])

    return (
        <>
            <Title title='Transforma su mundo' />
            <div className='item__container'>
                <ItemList data={data} />
            </div>
        </>
    )
}

export default ItemListContainer