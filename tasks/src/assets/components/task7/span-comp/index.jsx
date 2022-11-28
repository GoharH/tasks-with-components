import React from "react";
import './style.scss'

class SpanImage extends React.Component {
    render() {
        return <div className="padding-33">
            <span className="image" style={{ backgroundImage: `url(${this.props.bgImage})` }}></span>
        </div>

    }
}
export default SpanImage