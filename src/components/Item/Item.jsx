import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = (props) => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }

    return (
        <div className='item'>
            <div className='item__info'>
                <img src={props.src} alt={props.alt} />
                <h3>{props.name}</h3>
                <div>{props.price}</div>
            </div>
            <ItemCount initial={0} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default Item