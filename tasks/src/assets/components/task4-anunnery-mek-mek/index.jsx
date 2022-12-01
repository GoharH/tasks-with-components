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
                    <p className="new-list">
                        {this.state.nameList.map((item, index) => {
                            return (index % 2 === 0) ? <p key={index} className='list-item'> {item}</p> : null
                        })}

                        {/* kam index-ov */}
                        {/* {this.state.nameList.filter((x, i) => i % 2 === 0).map((item, index) => {
                            return <li key={index} item={this.state}> {index + 1}. {item}</li>
                        })} */}
                    </p>

                </div>
                <div className="xumb1">
                    <p className="box-title">Group 2</p>
                    <p className="new-list">
                        {this.state.nameList.map((item, index) => {
                            return (index % 2 === 0) ? null : <p key={index} className='list-item'> {item}</p>
                        })}

                        {/* kam index-ov */}
                        {/* {this.state.nameList.filter((x, i) => !(i % 2 === 0)).map((item, index) => {
                            return <li key={index} item={this.state}> {index + 1}.{item}</li>
                        })} */}
                    </p>
                </div>
            </div>

        </section>
    }
}
export default TwoTeam