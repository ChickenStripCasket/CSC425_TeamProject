function formatDate(date){
    // Create a JavaScript Date object

    // Get the components (year, month, day, hour, minute) from the Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Create a string in the 'YYYY-MM-DDTHH:mm' format
    return `${year}-${month}-${day}T${hours}:${minutes}`;

    // Set the value of an input with type datetime-local
}

export default function DateTimeInput(
    {
        title,
        value,
        onValueChanged
    }
) {
    return (
        <section className='input-container'>
            <h3 className="title-large input-title">{title}</h3>
            <input
                className="text-area-input"
                type="datetime-local"
                value={formatDate(value)} // Format the date to ISO string without seconds and timezone
                onChange={e => onValueChanged(new Date(e.target.value))}
            />
        </section>
    )
}