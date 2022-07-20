import './ItemListContainer.css'
import Title from '../Title/Title'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const products = [
    {
        id: 1, productName: "Carpa de 1.0m", productPrice: 5000, pictureUrl: "https://i.imgur.com/einJcWE.jpg", pictureAlt: "Foto de carpita"
    },
    {
        id: 2, productName: "Carpa de 1.2m", productPrice: 6000, pictureUrl: "https://i.imgur.com/Bn3S1XW.jpg", pictureAlt: "Foto de carpita"
    },
    {
        id: 3, productName: "Carpa de 1.5m", productPrice: 7000, pictureUrl: "https://i.imgur.com/aU2fbpL.jpg", pictureAlt: "Foto de carpita"
    },
    {
        id: 4, productName: "Carpa de 2.0m", productPrice: 8000, pictureUrl: "https://i.imgur.com/TIUTU4Z.jpg", pictureAlt: "Foto de carpita"
    }
    
]


function ItemListContainer() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })

        getData.then(res => setData(res))

    }, []);

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