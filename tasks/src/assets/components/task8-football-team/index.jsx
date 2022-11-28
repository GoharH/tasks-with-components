import React from "react";
import './style.scss'

class FootballTeam extends React.Component {
    state = {
        players: ['Messi', 'Lewandowski', 'Ronaldo', 'Pedri', 'Neymar', 'Xavi', 'Ronaldinho', 'Mbape', 'Salah', 'Casillas', 'Jorginho', 'Runi', 'Mendy', 'Junior', 'Zidan', 'Backham', 'Kane', 'Dias', 'Silva', 'Kante'],
        teamPlayers: ['Messi', 'Lewandowski', 'Ronaldo', 'Pedri', 'Neymar', 'Xavi', 'Ronaldinho', 'Mbape', 'Salah', 'Casillas', 'Jorginho', 'Runi', 'Mendy', 'Junior', 'Zidan', 'Backham', 'Kane', 'Dias', 'Silva', 'Kante'],
    }

    handleClick = () => {
        let { teamPlayers } = this.state
        this.setState(teamPlayers.sort(() => Math.random() - 0.5))
    }

    render() {
        return <section>
            <div>
                <button onClick={this.handleClick}>Create a team</button>
            </div>
            <div className="flex-box">
                <div className="team">
                    <p className="title">Team 1</p>
                    {this.state.teamPlayers.map((item, index) => {
                        return (index < 10) ? <p key={index} item={this.state}>{item}</p> : null
                    })}
                </div>
                <div className="players">
                    <p className="title">Players</p>
                    {this.state.players.map((item, index) => {
                        return <p key={index} item={this.state}>{item}</p>
                    })}
                </div>
                <div className="team">
                    <p className="title">Team 2</p>
                    {this.state.teamPlayers.map((item, index) => {
                        return (index >= 10) ? <p key={index} item={this.state}>{item}</p> : null
                    })}
                </div>
            </div>
        </section>
    }
}
export default FootballTeam