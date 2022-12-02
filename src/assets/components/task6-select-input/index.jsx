import React from "react";
import './style.scss'

class InputSelect extends React.Component {
    state = {
        inputValue: '',
        placeholder: '',
        options: [
            {
                value: 'HTML',
            },
            {
                value: 'CSS',
            },
            {
                value: 'JS',
            },
            {
                value: 'React',
            },
        ],
    }

    selecthandlechange = (e) => {
        this.setState({ inputValue: e.target.value })
    }
    render() {
        return <section>
            <input type="text" value={this.state.inputValue} onChange={this.selecthandlechange} />
            <label>
                <select name="programming" id="classes" onChange={this.selecthandlechange}>
                    {this.state.options.map((item, index) => {
                        return <option key={index} item={this.state}  >{item.value}</option>
                    })}
                </select>
            </label>
        </section>
    }
}
export default InputSelect;
