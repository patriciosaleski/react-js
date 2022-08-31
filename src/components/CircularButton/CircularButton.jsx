import './CircularButton.css'


function CircularButton(props){
    return(
        <button disabled={props.disable} onClick={props.fn} className='circle-button'>{props.content}</button>
    )
}

export default CircularButton