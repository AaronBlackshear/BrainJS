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
      <div className="gradient-bg">
        <h1 className="ai-response">{response}</h1>
        <div className="flex-center-center screen-center">
          <input className="input" value={input} onChange={this.handleUseInput} />
          <button className="tab" onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    )
  }
}
