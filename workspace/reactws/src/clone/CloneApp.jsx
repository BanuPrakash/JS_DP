import React, { Children } from 'react'

const SpanWithText = ({ text, ...props }) => {
    return (
        <span {...props}>
            {text}
        </span>
    )
}

const ColorContainer = ({ children }) => {
    return React.cloneElement(children, {
        style: {
            backgroundColor: "khaki",
            padding: "20 px",
            color: "brown"
        }
    })
}
export default function CloneApp() {
    return (
        <ColorContainer>
            <SpanWithText text="Welcome to Design Patterns" />
        </ColorContainer>
    )
}
