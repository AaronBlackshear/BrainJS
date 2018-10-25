import React, { Component } from 'react'
import run from '../network/smartNetwork'

export default class Conversation extends Component {
  state = {
    input: '',
    response: ''
  }

  handleUseInput = input => {
    this.setState({ input: input.target.value })
  }

  sendMessage = () => {
    const { input } = this.state
    this.setState({ response: run(input) })
  }

  render () {
    const { input, response } = this.state

    return (
      <div>
        <input value={input} onChange={this.handleUseInput} />
        <button onClick={this.sendMessage}>Send</button>
        {response}
      </div>
    )
  }
}
