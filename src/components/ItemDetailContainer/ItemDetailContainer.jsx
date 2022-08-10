import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getFirestore, doc, getDoc } from 'firebase/firestore'

import FeatureContainer from '../FeatureContainer/FeatureContainer'
import ItemDetail from '../ItemDetail/ItemDetail'
import CloseIcon from '@mui/icons-material/Close'

import './ItemDetailContainer.css'


// const productInfo = [
//     {
//         id: 1, 
//         baseSize: 1.0,
//         height: 1.55
//     },
//     {
//         id: 2, 
//         baseSize: 1.2,
//         height: 1.7
//     },
//     {
//         id: 3, 
//         baseSize: 1.5,
//         height: 1.7
//     },
//     {
//         id: 4, 
//         baseSize: 2.0,
//         height: 1.85
//     }
// ]

const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    const { detalleId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbDoc = doc(db, 'products', detalleId)
        getDoc(dbDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    })

    return (
        <div className='item__detail'>
            <Link to='/'>
                <CloseIcon className='item__close-btn'/>
            </Link>
            <FeatureContainer />
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer