import React, { Component } from 'react'
import run from '../network/network'
import Happy from './Happy'
import Sad from './Sad'
import Reset from './Reset'
import '../css/mood-guesser.css'

export default class MoodGuesser extends Component {
  state = {
    mood: null,
    smiles: 0,
    frowns: 0
  }

  componentDidMount () {
    let smiles = localStorage.getItem('smiles')
    let frowns = localStorage.getItem('frowns')
    let mood = localStorage.getItem('mood')
    this.setState({
      smiles: JSON.parse(smiles),
      frowns: JSON.parse(frowns),
      mood: JSON.parse(mood) })
  }

  setMood = (smiles, frowns) => {
    const mood = run({ smiles, frowns })
    this.setState({ mood })
    localStorage.setItem('mood', JSON.stringify(mood))
  }

  showEmotion = state => {
    this.setState(prevState => {
      localStorage.setItem(state, (prevState[state] + 1))
      return { [state]: (prevState[state] + 1) }
    })
  }

  clearEmotions = () => {
    this.setState({
      mood: null,
      smiles: 0,
      frowns: 0
    })
    localStorage.clear()
  }

  render () {
    const { mood, frowns, smiles } = this.state

    return (
      <div>
        <button
          className='emoji-btn'
          onClick={() => this.showEmotion('smiles')}
        >
          <span role='img' aria-label='smile'>😁</span>
        </button>
        <button
          className='emoji-btn'
          onClick={() => this.showEmotion('frowns')}
        >
          <span role='img' aria-label='smile'>☹️</span>️
        </button>
        <button
          className='emoji-btn'
          onClick={() => this.setMood(smiles, frowns)}
        >
          <span role='img' aria-label='smile'>Guess Mood 😏</span>️
        </button>
        {mood && (mood.happy > mood.sad ? <Happy /> : <Sad />)}
        <Reset clearEmotions={this.clearEmotions} />
      </div>
    )
  }
}
