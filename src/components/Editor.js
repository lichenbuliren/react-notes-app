import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateNote, addNote } from '../store/actionCreators'
import '../assets/styles/editor.css'

class Editor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentNote: {
        id: +new Date(),
        title: '',
        content: '',
        favorite: false
      }
    }
  }
  
  handleChange = (e, type) => {
    const val = e.target.value
    const newNote =  {...this.state.currentNote, ...{ [type]: val }}
    console.log(this.state.currentNote);
    this.setState({
      currentNote: newNote
    })
  }


  render() {
    let btn = null
    if (this.props.notes.some(note => note.id === this.state.currentNote.id)) {
      btn = <a className="btn btn-primary" onClick={(e) => this.props.updateNote(this.state.currentNote)}>更新</a>
    } else {
      btn = <a className="btn btn-primary" onClick={(e) => this.props.addNote(this.state.currentNote)}>添加</a>
    }

    return (
      <div className="note-editor">
        <div className="form-group">
          <input type="text" name="title"
            className="title form-control"
            placeholder="请输入标题"
            value={this.state.currentNote.title}
            onChange={(e) => this.handleChange(e, 'title')}/>
          <textarea
            row="3" 
            name="content"
            className="form-control"
            placeholder="请输入正文"
            value={this.state.currentNote.content}
            onChange={(e) => this.handleChange(e, 'content')}>
          </textarea>
          {btn}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNote: note => {
      console.log(note)
      dispatch(addNote(note))
    },
    updateNote: note => {
      dispatch(updateNote(note))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {...state}
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)