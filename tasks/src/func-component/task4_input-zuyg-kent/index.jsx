import React, { useState } from "react";
import './style.scss';

const InputNum = () => {

    const [inputNumber, setInputNumber] = useState('')
    const [numbers, setNumbers] = useState([])

    const handleChange = (e) => {
        setInputNumber(e.target.value)
    }
    const handleClick = () => {
        for (let i = 0; i <= inputNumber; i++) {
            //console.log(i)
            numbers.push(i)
            // console.log(numbers)
            setNumbers([...numbers])
        }

        //kam
        // let newNum =[]
        // for (let i = 0; i <= inputNumber; i++) {
        //     newNum.push(i)
        // }
        // setNumbers(newNum)

    }
    return <section>
        <label htmlFor="">
            <input type="number" className="numInput"
                onChange={handleChange} value={inputNumber} />
            <button onClick={handleClick}>Numbers</button>
        </label>
        {numbers.map((item, index) => {
            return (item % 2 === 0) ? <p key={index} style={{ color: "red" }}>{item}</p> : <p key={index} style={{ color: "black" }}>{item}</p>
        })}
    </section>
}
export default InputNum