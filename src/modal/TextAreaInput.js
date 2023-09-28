import './Input.css'

export default function TextAreaInput(
    {
        title,
        placeholder,
        value,
        onValueChanged
    }
) {
    return (
        <section className='input-container'>
            <h3 className="title-large input-title">{title}</h3>
            <textarea className="title-medium text-area-input" onChange={event => onValueChanged(event.target.value)} placeholder={placeholder} value={value}/>
        </section>
    )
}