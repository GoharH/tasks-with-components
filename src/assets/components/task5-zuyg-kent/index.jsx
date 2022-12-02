import React from "react";
import './style.scss'

class ZuygKent extends React.Component {
    state = {
        number: '',
        numberList: []
    }
    handleChange = (e) => {
        this.setState({ number: e.target.value })
    }
    handleClick = () => {
        let { numberList } = this.state
        this.state.numberList.push(this.state.number)
        this.setState({ numberList, number: '' })
    }
    render() {
        return <section>
            <div className="flex-div">
                <label>
                    <input className="input5" type="number" value={this.state.number} onChange={this.handleChange} />
                </label>
                <button onClick={this.handleClick}>Add</button>
            </div>
            <div className="flex-div">
                <div className="xumb">
                    <p className="box-title">Even number</p>
                    {this.state.numberList.map((item, index) => {
                        return (item % 2 === 0) ? <p key={index} item={this.state}>{item}</p> : null
                    })}
                </div>
                <div className="xumb">
                    <p className="box-title">Odd number</p>
                    {this.state.numberList.map((item, index) => {
                        return (item % 2 === 0) ? null : <p key={index} item={this.state}>{item}</p>
                    })}
                </div>
            </div>
        </section>
    }
}
export default ZuygKent