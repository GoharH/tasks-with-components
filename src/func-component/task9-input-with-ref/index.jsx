import React, { useRef, useEffect } from "react";
import { useState } from "react";
import './style.scss';

const InputWithRef = () => {
    const inputRef = useRef()
    const btnPosition = useRef()
    const [position, setPosition] = useState({ top: 0, left: 0 })
    const [selectedPosition, setSelectedPosition] = useState({ top: 0, left: 0 })


    // xndir 1
    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    //xndir 2
    useEffect(() => {
        let topB = Math.floor(Math.random() * 600)
        let leftB = Math.floor(Math.random() * 1200)
        setPosition({
            top: topB,
            left: leftB
        })

    }, [])


    const changePlace = () => {
        console.log(btnPosition.current.offsetTop)
        console.log(btnPosition.current.offsetLeft)
        setSelectedPosition({
            top: btnPosition.current.offsetTop,
            left: btnPosition.current.offsetLeft
        })

    }
    return <div className="sectionR">
        <label htmlFor="">
            <input type="text"
                className='input-ref'
                ref={inputRef} />
        </label>
        <button className="btn-ref" onClick={handleClick}>Activate</button>

        {/* xndir 2 */}
        <div className="section-of-btn">
            <p>left: {selectedPosition.left}</p>
            <p>top: {selectedPosition.top}</p>
            <button style={{ left: position.left + 'px', top: position.top + 'px' }} className="btn-free" ref={btnPosition} onClick={changePlace}>Change my place</button>
        </div>

    </div>
}
export default InputWithRef