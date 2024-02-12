// RectIcon.jsx
import React from 'react'

const RectIcon = ({ fill = "text-black", size = "1rem", rotate = "0" }) => {
    return (
        <svg className={`fill-current ${fill} transform rotate-${rotate}`} style={{ height: size, width: size }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 97">
            <path d="M0.585693 50.9965C0.585693 22.8322 23.4174 0.000488281 51.5817 0.000488281H97V96.4148H0.585693V50.9965Z"/>
        </svg>
    )
}

export default RectIcon