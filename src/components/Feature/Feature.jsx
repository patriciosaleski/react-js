const Feature = (props) => {
    return (
        <div className='feature'>
            <img className='feature__icon' src={props.src} alt={props.alt} />
            <p className='feature__text'>{props.text}</p>
        </div>
    )
}

export default Feature