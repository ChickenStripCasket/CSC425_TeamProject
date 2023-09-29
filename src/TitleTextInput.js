import './modal/Input.css'

export default function TextInput({
    title,
    placeHolder,
    value,
    onValueChanged
}){
    
    return (
        <section className='input-container'>
            <h1 className="title-large input-title">Title</h1>
            <input className="title-medium text-area-input" onChange= {event => {onValueChanged(event.target.value)}} type= 'text' placeholder= {placeHolder} value= {value}></input>
        </section>
    )
}