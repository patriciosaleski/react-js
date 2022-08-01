import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './GoToCart.css'

const GoToCart = () => {
    return (
        <div className='item__checkout--container'>
            <button className="item__checkout"><ShoppingCartOutlinedIcon /> Finalizar compra</button>
        </div>
    )
}

export default GoToCart