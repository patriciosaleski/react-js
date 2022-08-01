import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import './cartwidget.css'

function CartWidget(){
    return (
        <Link to='/carro'>
            <ShoppingCartOutlinedIcon className='cart-icon'/> Carro
        </Link>
    )
}

export default CartWidget