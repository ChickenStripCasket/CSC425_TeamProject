export function Icon(
    {
        icon,
        className
    }
) {
    // build & return the icon
    return (
        <span className={`material-symbols-rounded ${className}`}>{icon}</span>
    )
}