import React, { useEffect, useState } from "react";
import './style.scss';
import image1 from '../../assets/images/smile.jpg';

const RandomNumber = () => {
    //const [image, setImage] = useState({ image: image1 })
    const [number, setNumber] = useState()



    // useEffect(() => {
    //     setImage([
    //         { image: image1 },
    //     ])
    // }, [])

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 1000)
        setNumber(randomNumber)
    }, [])

    return <div className="R-section">
        {number > 500 ? <span className="image-R" style={{ backgroundImage: `url(${image1})` }}></span> : <p>Try one more time</p>}
    </div>

}
export default RandomNumber