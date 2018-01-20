import React, { Component } from 'react';

export default class Toolbar extends Component {
  constructor(props) {
    super(props)
  }

  newNote = () => {
    console.log('new note')
  }

  deleteNote = () => {
    console.log('delete note')
  }

  toggleFavorite = () => {
    console.log('toggle favorite')
  }
  
  render() {
    return (
      <div className="toolbar">
        <i className="glyphicon logo">
          <img src="../assets/logo.svg" alt="logo" width="30" height="30" />
        </i>
        <i onClick={this.newNote} className="glyphicon glyphicon-plus"></i>
        <i onClick={this.toggleFavorite} className="glyphicon glyphicon-star"></i>
        <i onClick={this.deleteNote} className="glyphicon glyphicon-remove"></i>
      </div>
    );
  }
}