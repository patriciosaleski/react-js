import Item from '../Item/Item'

const ItemList = ({data = []}) => {
    return (
        data.map(product => <Item key={product.id} id={product.id} src={product.productPic} alt={product.productPicAlt} name={product.productName} price={product.productPrice}/>)
    )
}

export default ItemList