import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store/index'
import { newNote, deleteNote, toggleFavorite, addNote, updateNote } from './store/actionCreators'
import './App.css';

import { Toolbar, NoteList, Editor }  from './components/'
import { VisibilityFilters } from './store/actionTypes';

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="app">
        <Toolbar 
          handleNew={() => this.props.handleNew()} 
          handleDel={() => this.props.handleDel(this.props.activeNote.id)} 
          toggleFavorite={() => this.props.toggleFavorite(this.props.activeNote.id)} 
          activeNote={this.props.activeNote}/>
        <NoteList 
          notes={this.props.notes}
          activeNote={this.props.activeNote}
          filterType={this.props.filterType}/>
        <Editor 
          handleAdd={note => this.props.handleAdd(note)}
          handleUpdate={(note) => this.props.handleUpdate(note)}
          activeNote={this.props.activeNote}
          notes={this.props.notes}/>
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
      break
    default:
      return notes
      break
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
