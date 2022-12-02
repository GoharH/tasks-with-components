import React, { useEffect, useState } from "react";
import './style.scss'


const InputChange = () => {
    const [inputVal, setInputVal] = useState('')
    const [borderColor, setBorderColor] = useState(false)

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }
    useEffect(() => {

        if (inputVal.length > 20) {
            setBorderColor(true)
        } else {
            setBorderColor(false)
        }

    }, [inputVal])

    return <div className="input-size-20">
        <label htmlFor="">
            <input type="text"
                className={`input-20 ${borderColor ? 'border-red' : "border"}`}
                onChange={handleChange} value={inputVal} />
            {borderColor ? <p>You have exceeded the number of symbols in input </p> : null}
        </label>
    </div>
}
export default InputChange