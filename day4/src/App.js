import React, { Component } from "react"
import "./App.css"

const WinMessage = () => <div>You Win!</div>
const LoseMessage = () => <div>You're a loser!</div>
let globalWinStreak = 0;
const MAX_VALUE = 3;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomValue: Math.floor(Math.random() * MAX_VALUE),
      guess: -1,
      win: false,
      winStreak: 0,
    }
  }

  updateGuess = event => {
    this.setState({ guess: event.target.value })
  }

  newRandomValue = event =>{
    this.setState({randomValue: Math.floor(Math.random() * MAX_VALUE)})
  }

  checkWin = event => {
    event.preventDefault()
    // TODO: check if guess equal to randomValue and update this.state.win
    // eslint-disable-next-line
    this.setState({win: this.state.randomValue == this.state.guess});
    if(this.state.win){
      this.setState({winStreak: this.state.winStreak + 1})
      this.newRandomValue();
    } else {
      this.setState({winStreak: 0})
    }
    console.log(this.state.win)
    globalWinStreak = this.state.winStreak;
  }

  render() {
    return (
      <div className="App">
        <h1>A Super Fun Guessing Game</h1>
        <div id="currentValue">Current value: {this.state.randomValue}</div>
        <form>
          <label>
            Enter a guess:
            <input
              type="number"
              value={this.state.value}
              onChange={this.updateGuess}
            />
          </label>
          <input type="submit" value="Submit" onClick={this.checkWin} />
        </form>
        <button onClick={this.newRandomValue}>Change the value </button>
        <div id = "userInfo">
            <h2>Winstreak: {globalWinStreak}</h2>
            <h2>Maximum value: {MAX_VALUE - 1}</h2>
        </div>
        {this.state.win ? <WinMessage /> : <LoseMessage />}
      </div>
    )
  }
}

export default App
