import React, { Component } from 'react';
import './App.css';

import { Toolbar, NoteList, Editor }  from './components/'

class App extends Component {

  constructor(props) {
    super(props)
    this.init()
  }

  init() {
    console.log('app init')
  }

  render() {
    return (
      <div className="app">
        <Toolbar />
        <NoteList />
        <Editor />
      </div>
    );
  }
}

export default App;
