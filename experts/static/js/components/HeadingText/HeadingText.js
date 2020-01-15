import React from 'react'

export default function HeadingText(props) {
    return (
        <p className={`heading-text ${props.className}`}>
            {props.children}
        </p>
    )
}
