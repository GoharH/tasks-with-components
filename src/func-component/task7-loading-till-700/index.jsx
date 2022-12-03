import React, { useEffect, useState } from "react";
import './style.scss';
import image1 from '../../assets/images/smile.jpg';

const RandomNumber = () => {
    //const [image] = useState({ image: image1 })
    // qani, vor function-y chenq ogtagorcelu, el chenq grum setImage-y
    const [number, setNumber] = useState()


    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 1000)
        setNumber(randomNumber)
    }, [])

    return <div className="R-section">
        {number > 500 ? <span className="image-R" style={{ backgroundImage: `url(${image1})` }}></span> : <p>Try one more time</p>}
        {/* ete grenq useState-ov , apa style-y klini____  backgroundImage: `url(${image.image})` */}
    </div>

}
export default RandomNumber