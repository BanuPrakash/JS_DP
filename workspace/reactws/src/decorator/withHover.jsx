import { useState } from "react"

// HOC, decorator
export default function withHover(Component) {
    return props => {
        const [hovering, setHover] = useState(false);

        return <Component
            {...props}
            hovering={hovering}
            onMouseEnter = {() => setHover(true)}
            onMouseLeave = {() => setHover(false)}
        />
    }
}