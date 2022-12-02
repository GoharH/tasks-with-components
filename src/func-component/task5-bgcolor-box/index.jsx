import React, { useEffect, useState } from "react";
import './style.scss'

const BgColorBox = () => {
    const [bgColor, setBgColor] = useState('#341B51')
    const [textColor, setTextColor] = useState('')


    useEffect(() => {
        const randColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setBgColor(randColor)
        const randTextColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
        setTextColor(randTextColor)
    }, [])

    return <div className="bg-color-section" style={{ backgroundColor: `${bgColor}` }} >
        <h1 style={{ color: `${textColor}` }}>Hello December</h1>
    </div>
}
export default BgColorBox