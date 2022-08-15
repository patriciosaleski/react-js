import { useState, useEffect } from 'react'

import Feature from '../Feature/Feature'


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

const FeatureContainer = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const getData = new Promise(resolve => {
            resolve(features)
        })
        getData.then(res => setData(res))
    
    }, [])

    return (
        data.map(feature => <Feature key={feature.id} src={feature.src} alt={feature.alt} text={feature.text} />)
    )
}

export default FeatureContainer