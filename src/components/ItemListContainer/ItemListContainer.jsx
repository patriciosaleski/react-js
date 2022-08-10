import { useState, useEffect } from 'react'

import { getFirestore, collection, getDocs } from 'firebase/firestore'

import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

function ItemListContainer() {
    const [data, setData] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const dbCollection = collection(db, 'products')
        getDocs(dbCollection)
            .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))

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