import { useCartContext } from "../../context/CartContext"
import CircularButton from "../CircularButton/CircularButton"
import './ItemCart.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext()


    return (
        <div className='cart__item'>
            <img src={product.src} alt={product.alt}/>
            <div className='cart__item--info'>
                <div className="cart__item--description">
                    <p>Producto: {product.name}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio un.: ${product.price}</p>
                </div>
                <div className='cart__item--aux'>
                    <p>Subtotal: ${product.price * product.quantity}</p>
                    <CircularButton content={<DeleteForeverIcon />} onClick={(() => removeProduct(product.id))}/>
                </div>
            </div>
        </div>
    )
}

export default ItemCart