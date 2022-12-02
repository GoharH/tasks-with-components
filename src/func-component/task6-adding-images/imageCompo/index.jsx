import React from "react";
import './style.scss'

const SpanImageComp = ({ data }) => {

    return <div >
        <span className="image-b" style={{ backgroundImage: `url(${data.image})` }}></span>
    </div>


}
export default SpanImageComp