import React from 'react';
import { connect } from 'react-redux'
import { newNote, deleteNote, toggleFavorite } from '../store/actionCreators'
import logo from '../assets/logo.svg';
import '../assets/styles/toolbar.css';

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <i className="glyphicon logo">
        <img src={logo} alt="logo" width="30" height="30" />
      </i>
      <i onClick={props.newNote} className="glyphicon glyphicon-plus"></i>
      <i onClick={() => props.toggleFavorite(props.activeNote)} className={'glyphicon glyphicon-star ' + (props.activeNote.favorite ? 'starred': '')}></i>
      <i onClick={props.deleteNote} className="glyphicon glyphicon-remove"></i>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeNote: state.activeNote
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    newNote: () => {
      dispatch(newNote({
        id: +new Date(),
        title: '',
        content: '',
        favorite: false
      }))
    },
    toggleFavorite: favorite => {
      dispatch(toggleFavorite(favorite))
    },
    deleteNote: () => {
      dispatch(deleteNote())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)