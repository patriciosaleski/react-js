import './ItemDetail.css'


const ItemDetail = ({ data }) => {
    return (
        <div className='item__detail--features'>
            <p>Carpa de {data.baseSize}m de base y {data.height}m de alto.</p>
            <ul>
                <li>Incluye alfombra acolchada impermeable.</li>
                <li>Incluye un almohadón con diseño a elegir.</li>
                <li>Cuenta con una ventana con cortina.</li>
                <li>También posee un bolsillo juguetero.</li>
            </ul>
        </div>
    )
}

export default ItemDetail