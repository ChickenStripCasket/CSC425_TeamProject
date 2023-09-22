import { Icon } from './Icon'
import './material.css'

export function IconButton(
    {
        icon,
        iconFilled,
        onClick,
        className
    }
) {
    return (
        <button onClick={onClick} className={`icon-button ${className}`}>
            <Icon filled={iconFilled} icon={icon}/>
        </button>
    )
}