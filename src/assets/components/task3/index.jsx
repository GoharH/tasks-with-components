import React from "react";
import './style.scss'

class Box extends React.Component {
    state = {
        product: {
            inputText: '',
            inputNum: '',
        },
        prodList: []
    }
    handleChane = (e) => {
        this.setState({ product: { ...this.state.product, [e.target.name]: e.target.value } })
    }

    handleAdd = () => {
        const { product } = this.state
        // naev push e anum
        this.setState({
            prodList: [...this.state.prodList, product], product: {
                inputText: '',
                inputNum: '',
            }
        })


    }
    render() {
        return <section className="task3-section">
            <div>
                {console.log(this.state.prodList)}
                <label>
                    <input type="text" name='inputText' value={this.state.product.inputText} onChange={this.handleChane} />
                    <input type="number" name='inputNum' value={this.state.product.inputNum} onChange={this.handleChane} />
                </label>

                <div>
                    <button onClick={this.handleAdd}>Add</button>
                </div>
            </div>
            <div>
                {this.state.prodList.map((item, index) => {
                    return <div className="box" key={index} item={this.state.product}>
                        <h3>{item.inputText}</h3>
                        {item.inputNum < 10000 ? <p>{item.inputNum}</p> : <div>
                            <p>old price <span style={{ textDecoration: 'line-through' }}>{item.inputNum}</span></p>
                            <p>new price <span>{item.inputNum - item.inputNum * 10 / 100}</span></p>
                        </div>}
                    </div>
                })}
            </div>
        </section>
    }
}
export default Box