import React, { useState } from "react";
import './style.scss'

const BigSizeInput = () => {
    const [inputValue, setInputValue] = useState('')

    const [fontSize, setFontSize] = useState(12)


    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleChangeSize = () => {
        let textFS = + fontSize
        setFontSize(textFS + 2)
    }
    return <section >
        <label htmlFor="">
            <input type="text" value={inputValue} onChange={handleChange} className='input' />
        </label>
        <div className="flex">
            <p style={{ fontSize: fontSize + 'px' }}>{inputValue}</p>
            <button onClick={handleChangeSize}>Bigger</button>
        </div>
    </section>
}
export default BigSizeInput