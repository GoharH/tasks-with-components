import React from "react";
import './style.scss'

class TwoTeam extends React.Component {
    state = {
        name: '',
        nameList: []
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    handleClick = () => {
        let { nameList } = this.state
        nameList.push(this.state.name)
        this.setState({ nameList, name: '' })
    }
    render() {
        return <section>
            <div className="group-boxes">
                <label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <div>
                    <button onClick={this.handleClick}>Add</button>
                </div>
            </div>
            <div className="group-boxes">
                <div className="xumb1">
                    <p className="box-title">Group 1</p>
                    <ul>
                        {this.state.nameList.map((item, index) => {
                            return (index % 2 === 0) ? <li key={index} item={this.state}> {item}</li> : null
                        })}
                    </ul>

                </div>
                <div className="xumb1">
                    <p className="box-title">Group 2</p>
                    <ul>
                        {this.state.nameList.map((item, index) => {
                            return (index % 2 === 0) ? null : <li key={index} item={this.state}> {item}</li>
                        })}
                    </ul>
                </div>
            </div>

        </section>
    }
}
export default TwoTeam