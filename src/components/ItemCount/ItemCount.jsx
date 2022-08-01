import CircularButton from '../CircularButton/CircularButton'
import './ItemCount.css'
import { useState, useEffect } from 'react'

export const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(initial)
    }, [initial])

    return (
        <div className="item__counter">
            <CircularButton disable={count <= 0 } fn={decrease} content="-" />
            <span>{count}</span>
            <CircularButton disable={count >= stock} fn={increase} content="+" />
            <div>
                <button disabled={stock <= 0 || count === 0} onClick={() => onAdd(count)}>Agregar al carro</button>
            </div>
        </div>
    )
}

export default ItemCount