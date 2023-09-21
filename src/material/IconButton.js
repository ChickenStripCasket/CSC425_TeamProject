import { Icon } from './Icon'
import './material.css'

export function IconButton(
    {
        icon,
        onClick,
        className
    }
) {
    return (
        <button onClick={onClick} className={`icon-button ${className}`}>
            <Icon icon={icon}/>
        </button>
    )
}