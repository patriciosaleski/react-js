import { useState, useEffect } from 'react'
import FeatureContainer from '../FeatureContainer/FeatureContainer'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const features = [
    {
        id: 1,
        src: 'https://i.imgur.com/LHcI66S.png',
        alt: 'Imagen de una hoja de arbol cayendo',
        text: 'Super cómoda'
    },
    {
        id: 2,
        src: 'https://i.imgur.com/0gVggHs.png',
        alt: 'Imagen de una persona practicando yoga',
        text: 'Un espacio propio'
    },
    {
        id: 3,
        src: 'https://i.imgur.com/ymIS4CX.png',
        alt: 'Imagen de dos eslabones de cadena unidos',
        text: 'Resistencia superior'
    },
    {
        id: 4,
        src: 'https://i.imgur.com/C8phxBg.png',
        alt: 'Imagen de una ventana',
        text: 'Una gran vista'
    }
]

const ItemDetailContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            resolve(features)
        })

        getData.then(res => setData(res))

    }, [])
    

    return (
        <div className='item__detail'>
            <FeatureContainer data={data} />
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer