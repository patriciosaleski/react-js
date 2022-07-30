import Item from '../Item/Item'

const ItemList = ({data = []}) => {
    return (
        data.map(product => <Item key={product.id} id={product.id} src={product.pictureUrl} alt={product.pictureAlt} name={product.productName} price={product.productPrice}/>)
    )
}

export default ItemList