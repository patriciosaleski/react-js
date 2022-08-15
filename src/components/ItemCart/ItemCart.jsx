import { useCartContext } from "../../context/CartContext"

import { IconButton, Tooltip, Typography } from "@mui/material"
import DeleteForever from "@mui/icons-material/DeleteForever"

import './ItemCart.css'


const ItemCart = ({ product }) => {
    
    const { removeFromCart } = useCartContext()

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
                    <Tooltip title={<Typography fontSize={12}>Quitar producto</Typography>}>
                        <IconButton onClick={ (() => removeFromCart(product.id)) }>
                            <DeleteForever />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default ItemCart