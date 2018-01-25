import React, { Component } from 'react'
import { VisibilityFilters } from '../store/actionTypes'

import '../assets/styles/notelist.css';

export default class NoteList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showType: 'all',
      activeNote: null,
      searchNotes: []
    }
  }

  showAll = () => {
    this.setState(prevState => ({
      showType: 'all'
    }))
    console.log('show all');
  }

  showFavorite = () => {
    console.log('show favorite');
    this.setState(prevState => ({
      showType: 'favorite'
    }))
  }

  updateActiveNote = note => {
    console.log('update active note');
  }
  
  render() {
    return (
      <div className="notes-list">
        <div className="list-header">
          <h2>Notes | heavenru.com</h2>
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group" role="group">
              <button type="button"
                className={'btn btn-default ' + (this.props.filterType === VisibilityFilters.SHOW_ALL ? 'active' : '')}>All Notes</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button"
                className={'btn btn-default ' + (this.props.filterType === VisibilityFilters.SHOW_FAVORITE ? 'active' : '')}>Favorites</button>
            </div>
          </div>
          <div className="btn-group btn-group-justified" role="group">
            <div className="input-group search">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="list-group">
            {this.props.notes.map(note => 
              <div key={note.id}
                className={'list-group-item ' + (this.props.activeNote.id === note.id ? 'active' : '')}
                onClick={this.updateActiveNote(note)}>
                <h4 className="list-group-item-heading">
                  {note.title.trim()}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}