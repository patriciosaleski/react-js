import { useCartContext } from "../../context/CartContext"
import CircularButton from "../CircularButton/CircularButton"
import './ItemCart.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()


    return (
        <div className='cart__item'>
            <img src={product.pictureUrl} alt={product.pictureAlt}/>
            <div>
                <p>Producto: {product.productName}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio un.: {product.productPrice}</p>
                <p>Subtotal: {product.productPrice * product.quantity}</p>
                <CircularButton content={<DeleteForeverIcon />} onClic={() => removeProduct(product.id)}/>
            </div>
        </div>
    )
}

export default ItemCart