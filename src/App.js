import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';

import Toolbar from './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <NoteList />
        <Editor />
      </div>
    );
  }
}

export default App;
