

export default function TextInput({
    title,
    placeHolder,
    value,
    onValueChanged
}){
    
    return (
        <section>
            <h1>Title</h1>
            <input  onChange= {event => {onValueChanged(event.target.value)}} type= 'text' placeholder= {placeHolder} value= {value}></input>
        </section>
    )
}