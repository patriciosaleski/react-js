import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
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
                <ItemCount initial={0} stock={10} onAdd={onAdd}/>
            </div>
    )
}

export default Item