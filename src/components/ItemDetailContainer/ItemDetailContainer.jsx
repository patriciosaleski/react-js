import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getFirestore, doc, getDoc } from 'firebase/firestore'

import FeatureContainer from '../FeatureContainer/FeatureContainer'
import ItemDetail from '../ItemDetail/ItemDetail'
import CloseIcon from '@mui/icons-material/Close'

import './ItemDetailContainer.css'


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