import { Icon } from './Icon'
import './material.css'

export function FilledButton(
    {
        label,
        icon,
        onClick,
        className = ''
    }
) {
    return (
        <button 
            onClick={event => { 
                // ensure that onClick exists, and call the function
                if (onClick) onClick(event)
            }}
            className={`material-filled-button label-large ${className}}`}
        >
            {/* Icon can be undefined, so only render it if it's provided */}
            {icon && <Icon icon={icon}/>}
            {/* Render the label */}
            <h4>{label}</h4>
        </button>
    )
}