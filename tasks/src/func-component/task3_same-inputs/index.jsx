import React from "react";
import { useState } from "react";
import './style.scss';

const SameInputs = () => {
    const [input1Value, setInput1Value] = useState('')
    const [input2Value, setInput2Value] = useState('')
    const [isEqual, isEqual1] = useState(false)

    const handleChangeInput1 = (e) => {
        setInput1Value(e.target.value)

    }
    const handleChangeInput2 = (e) => {
        setInput2Value(e.target.value)
    }
    const handleClickCompare = () => {
        if (input1Value === input2Value) {
            isEqual1(true)
        } else if (input1Value !== input2Value) {
            isEqual1(false)
        }
        //setInput1Value('')
        //setInput2Value('')
    }
    return <section>
        <label htmlFor="">
            {!input1Value && !input1Value ? <input type="text"
                className="inputs"
                value={input1Value}
                onChange={handleChangeInput1} /> : <input type="text"
                    className={isEqual ? "inputs green" : "inputs red"}
                    value={input1Value}
                    onChange={handleChangeInput1} />}

            {!input1Value && !input1Value ? <input type="text"
                className="inputs"
                value={input2Value}
                onChange={handleChangeInput2} /> : <input type="text"
                    className={isEqual ? "inputs green" : "inputs red"}
                    value={input2Value}
                    onChange={handleChangeInput2} />}
            {/* <input type="text"
                className={isEqual ? "inputs green" : "inputs red"}
                value={input1Value}
                onChange={handleChangeInput1} />
            <input type="text"
                className={isEqual ? "inputs green" : "inputs red"}
                value={input2Value}
                onChange={handleChangeInput2} /> */}
        </label>
        <button onClick={handleClickCompare}>Compare</button>
    </section>
}
export default SameInputs