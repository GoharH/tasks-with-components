import React from "react";
import './style.scss';

const CompoName = ({ data }) => {
    return <div className="compo-modal-box">
        <h2>{data.title}</h2>
    </div>
}
export default CompoName 