import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FeatureContainer from '../FeatureContainer/FeatureContainer'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const productInfo = [
    {
        id: 1, 
        baseSize: 1.0,
        height: 1.55
    },
    {
        id: 2, 
        baseSize: 1.2,
        height: 1.7
    },
    {
        id: 3, 
        baseSize: 1.5,
        height: 1.7
    },
    {
        id: 4, 
        baseSize: 2.0,
        height: 1.85
    }
]

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        const getData =  new Promise(resolve => resolve(productInfo))
        
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))))
    
    }, [])

    return (
        <div className='item__detail'>
            <FeatureContainer />
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer