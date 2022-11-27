import React from "react";
import './style.scss';

class InputName extends React.Component {
    state = {
        name: '',
        nameList: []
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    addName = (e) => {
        const { nameList } = this.state
        nameList.push(this.state.name)
        console.log(nameList)
        this.setState({ nameList, name: '' })

    }
    render() {
        return <section className="task1-section">

            <div className="adding-names">
                <label>
                    <input type="text" className="input" value={this.state.name}
                        onChange={this.handleChangeName} />
                </label>
                <div >
                    <button onClick={this.addName}>Add name</button>
                </div>
            </div>
            <div>
                <ul>
                    {this.state.nameList.map((item, index) => {
                        return <li key={index} item={this.state}>
                            {item}</li>
                    })}
                </ul>
            </div>
        </section>
    }
}
export default InputName