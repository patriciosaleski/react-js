import { useState } from 'react'
import { Link } from 'react-router-dom'
import GoToCart from '../GoToCart/GoToCar'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = (props) => {
    const [goToCart, setGoToCart] = useState(false)

    const onAdd = () => {
        setGoToCart(true)
    }

    return (
        
            <div className='item'>
                <Link to={`/detalle/${props.id}`}>
                    <div className='item__info'>
                        <img src={props.src} alt={props.alt} className='item__picture' />
                        <h3 className='item__name'>{props.name}</h3>
                        <div className='item__price'>${props.price}</div>
                    </div>
                </Link>
                {goToCart ?  <Link to='/carro'><GoToCart /></Link>
                        :   <ItemCount initial={0} stock={10} onAdd={onAdd}/>}
            </div>
    )
}

export default Item