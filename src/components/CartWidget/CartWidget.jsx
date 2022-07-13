import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import './cartwidget.css'

function CartWidget(props){
    return (
        <a href={props.href}>
            <ShoppingCartOutlinedIcon className='cart-icon'/> Carro
        </a>
    )
}

export default CartWidget