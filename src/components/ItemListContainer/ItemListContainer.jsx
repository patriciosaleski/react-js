import './ItemListContainer.css'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer() {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }

    return (
        <>
            <Title title='Transforma su mundo' />
            <ItemCount initial={0} stock={10} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer