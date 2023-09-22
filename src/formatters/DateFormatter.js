const dateFormatter = new Intl.DateTimeFormat()
const shortenedDateFormatter = new Intl.DateTimeFormat(undefined, {
    month: '2-digit',
    day: '2-digit',
})

export default function DateFormatter(
    {
        date,
        compact = false
    }
) {
    const formatter = compact ? shortenedDateFormatter : dateFormatter
    return (
        <time dateTime={date.toISOString()}>
            {formatter.format(date)}
        </time>
    )
}