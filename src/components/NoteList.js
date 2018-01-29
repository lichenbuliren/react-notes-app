import React, { Component } from 'react'
import { connect } from 'react-redux'
import { VisibilityFilters } from '../store/actionTypes'
import { toggleFilterType, updateNote, searchNotes } from '../store/actionCreators'

import '../assets/styles/notelist.css';

class NoteList extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  componentWillMount() {}

  search = e => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div className="notes-list">
        <div className="list-header">
          <h2>Notes | heavenru.com</h2>
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group" role="group">
              <button type="button"
                onClick={(e) => this.props.toggleFilterType(VisibilityFilters.SHOW_ALL)}
                className={'btn btn-default ' + (this.props.filterType === VisibilityFilters.SHOW_ALL ? 'active' : '')}>All Notes</button>
            </div>
            <div className="btn-group" role="group">
              <button type="button"
                onClick={(e) => this.props.toggleFilterType(VisibilityFilters.SHOW_FAVORITE)}
                className={'btn btn-default ' + (this.props.filterType === VisibilityFilters.SHOW_FAVORITE ? 'active' : '')}>Favorites</button>
            </div>
          </div>
          <div className="btn-group btn-group-justified" role="group">
            <div className="input-group search">
              <input type="text" className="form-control" value={this.state.search} placeholder="Search for..." onChange={this.search}/>
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="list-group">
            {this.props.filterNotes.filter(note => note.title.search(new RegExp(this.state.search, 'ig')) > -1).map(note => 
              <div key={note.id}
                className={'list-group-item ' + (this.props.activeNote.id === note.id ? 'active' : '')}
                onClick={() => this.props.updateNote(note)}>
                <h4 className="list-group-item-heading">
                  {note.title.trim()}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const filterNotes = state => {
  if (state.filterType === VisibilityFilters.SHOW_FAVORITE) {
    return state.notes.filter(note => note.favorite)
  } else {
    return state.notes
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...{
      filterNotes: filterNotes(state)
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNote: note => {
      dispatch(updateNote(note))
    },
    toggleFilterType: type => {
      dispatch(toggleFilterType(type))
    },
    searchNotes: search => {
      dispatch(searchNotes(search))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)