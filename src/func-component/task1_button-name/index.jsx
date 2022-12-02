import React, { useState } from "react";
import './style.scss';

const NameBTN = () => {
    // const [myName, setMyName] = useState([])
    const [isShown, setShown] = useState(false)

    const titleName = 'Gohar'

    const handleClick = () => {
        setShown(!isShown)
    }
    return <section>
        <button onClick={handleClick} className='nameBTN'>Click me</button>
        {titleName && isShown ? <p>{titleName}</p> : null}
    </section>

}
export default NameBTN