import React, { Component } from 'react'
import './App.css'
import Main from './components/Main'

export default class App extends Component {

  render() {
    return (
      <div className="out">
        <div className="in">
          <Main/>
      </div>
    </div>
    )
  }
}
