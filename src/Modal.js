import { useEffect, useState } from "react"
import "./Modal.css"
import { useRef } from "react"

const timeoutDebounce = (
    ref,
    timeout,
    callback
) => {
    if (ref) {
        clearTimeout(ref.current)
    }

    ref.current = setTimeout(callback, timeout)
}

export default function Modal(
    {
        visible,
        onClose,
        children
    }
) {
    const [isVisible, setIsVisible] = useState(visible)
    const [transitioning, setTransitioning] = useState(false)
    const [activeClass, setActiveClass] = useState('')
    const timeoutRef = useRef()
    const modalRef = useRef()

    useEffect(() => {
        setIsVisible(visible)
        if (!visible) {
            setTransitioning(true)
            setTimeout(() => setActiveClass('out'), 10)
            timeoutDebounce(timeoutRef, 150, () => {
                setTransitioning(false)
                setActiveClass('')
            })
        } else {
            setTimeout(() => setActiveClass('in'), 10)
        }
        
        // handle click
        function handleClick(event) {
            if (!event.defaultPrevented && modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [visible])

    return (
        <>
            {isVisible || transitioning ? <div class={`modal-container ${activeClass}`}>
                <section ref={modalRef} className={`modal ${activeClass}`}>
                    {children}
                </section>
            </div> : undefined}
        </>

    )
}