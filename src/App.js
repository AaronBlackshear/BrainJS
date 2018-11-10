import React, { Component } from 'react'
import logo from './logo.svg'
import './css/App.css'

import Tab from './components/Tab'
import MoodGuesser from './components/MoodGuesser'
import Conversation from './components/Conversation'

class App extends Component {
  state = {
    view: 'MoodGuesser'
  }

  changeView = view => {
    this.setState({ view })
  }

  render () {
    const { view } = this.state

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <div>
          <Tab
            className={ view === 'MoodGuesser' && 'active' }
            tabTitle='Mood Guesser'
            onClick={() => this.changeView('MoodGuesser')}
          />
          <Tab
            className={ view === 'BrainJS' && 'active' }
            tabTitle='BrainJs'
            onClick={() => this.changeView('BrainJS')}
          />
        </div>
        <section>
          {/* {view === 'MoodGuesser' ? <MoodGuesser /> : <Conversation />} */}
          <MoodGuesser />
        </section>
      </div>
    )
  }
}

export default App
