import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    console.log('I am rendering!')
    return (
      <div>
        {/* <h1>You're have everything it takes to be great at this!</h1>
        <button>The Search is Over</button> */}
      
        <hr></hr>
        <h2>I also  'Hot Reload' 😉</h2>

        {/* <h1>You have pressed the button {this.state.count} time!</h1> */}

         {this.state.count <= 1 ? `You have pressed the button  ${this.state.count} time!` : `You have pressed the button  ${this.state.count} times!`}
        
        <button onClick={this.handleClick}>PRESS ME</button>
      </div>
    )
  }
}

export default App