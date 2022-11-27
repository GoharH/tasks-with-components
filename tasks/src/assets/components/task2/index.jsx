import React from "react";
import './style.scss';

class InputNumber extends React.Component {
    state = {
        input1: '',
        input2: '',
        numberList: []
    }

    handleChangeNum = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    addNum = () => {
        let { input1, input2, numberList } = this.state
        for (input1; input1 <= input2; input1++) {
            // console.log(input1)
            numberList.push(input1)
            this.setState({ numberList, input1: '', input2: '' })
        }
    }
    render() {
        return <section className="task2-section">
            <div>
                <label>
                    <input type="number" value={this.state.input1} name='input1'
                        onChange={this.handleChangeNum} />
                    <input type="number" value={this.state.input2} name='input2'
                        onChange={this.handleChangeNum} />
                </label>
            </div>
            <div >
                <button onClick={this.addNum}>Add num</button>
            </div>
            <div>
                {this.state.numberList.map((item, index) => {
                    return (item % 2 === 0) ? <p key={index} item={this.state}>{item}</p> : <p style={{ color: 'red' }} key={index} item={this.state}>{item}</p>
                })}
            </div>
        </section>
    }
}
export default InputNumber