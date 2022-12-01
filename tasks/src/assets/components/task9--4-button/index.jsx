import React from "react";
import './style.scss'

class FourButtons extends React.Component {
    state = {
        information: [
            {
                title: 'Ipsum dolor',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, minus?',
                id: '1'
            },
            {
                title: 'Lorem, ipsum dolor',
                description: 'Dolorem, minus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati culpa iure mollitia nihil architecto!',
                id: '2'
            },
            {
                title: 'Dolor orem, ipsum ',
                description: 'Quod, amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, minus?',
                id: '3'
            },
            {
                title: 'Sit lorem, ipsum dolor',
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, minus?',
                id: '4'
            },
        ],
        choosen: [],
        active: 'none'
    }
    // componentDidMount() {
    //     this.selectProduct(this.state.information)
    // }

    handleClick = (elem) => {
        let newInfo = []
        if (elem) {
            newInfo = this.state.information.filter(x => x.id === elem)
            console.log(newInfo)
        }
        this.setState({ choosen: newInfo, active: elem })
    }
    render() {
        return <section>
            <div className="flex-box">
                {this.state.information.map((item, index) => {
                    return <button className="btn" onClick={() => this.handleClick(item.id)}> {item.id}</button>
                })}
                {/* <button className="btn" onClick={() => this.handleClick('1')}> 1</button>
                <button className="btn" onClick={() => this.handleClick('2')}> 2</button>
                <button className="btn" onClick={() => this.handleClick('3')}> 3</button>
                <button className="btn" onClick={() => this.handleClick('4')}> 4</button> */}
            </div>
            <div className="info-box">
                {this.state.choosen.map((item, index) => {
                    return <div className="box" key={index} >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                })}
            </div>
        </section>
    }
}
export default FourButtons