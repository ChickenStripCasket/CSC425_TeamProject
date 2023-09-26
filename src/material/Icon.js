import './material.css'

export function Icon(
    {
        icon,
        filled,
        className = ''
    }
) {
    // build & return the icon
    return (
        <span className={`material-symbols-rounded ${filled ? 'material-symbols-rounded-filled' : ''} ${className}`}>{icon}</span>
    )
}