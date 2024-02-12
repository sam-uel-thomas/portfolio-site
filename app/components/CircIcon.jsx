import React from 'react'

const CircIcon = ({ fill = "text-black", size = "1rem" }) => {
    return (
        <svg className={`fill-current ${fill}`} style={{ height: size, width: size }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 97">
            <circle cx="48.7929" cy="48.7934" r="48.2072"/>
        </svg>
    )
}

export default CircIcon