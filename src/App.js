import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newNote, deleteNote, toggleFavorite, addNote, updateNote } from './store/actionCreators'
import './App.css';

import { Toolbar, NoteList, Editor }  from './components/'
import { VisibilityFilters } from './store/actionTypes';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Toolbar />
        <NoteList />
        <Editor />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleNew: () => {
      dispatch(newNote())
    },
    handleDel: id => {
      dispatch(deleteNote(id))
    },
    toggleFavorite: id => {
      dispatch(toggleFavorite(id))
    },
    handleAdd: note => {
      dispatch(addNote(note))
    },
    handleUpdate: note => {
      dispatch(updateNote(note))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeNote: state.activeNote,
    filterType: state.filterType,
    notes: filterNotes(state.notes, state.filterType)
  }
}

const filterNotes = (notes, filterType) => {
  switch (filterType) {
    case VisibilityFilters.SHOW_FAVORITE:
      return notes.map(note => note.favorite)
    default:
      return notes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
