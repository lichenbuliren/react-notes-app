import React, { Component } from 'react';
import '../assets/styles/editor.css'

export default class Editor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  updateNoteTitle = (e) => {
    this.setState({
      title: e.target.value
    })
    console.log(this.state);
  }

  updateNoteContent = (e) => {
    this.setState({
      content: e.target.value
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="note-editor">
        <div className="form-group">
          <input type="text" name="title"
            className="title form-control"
            placeholder="请输入标题"
            onChange={this.updateNoteTitle} 
            value={this.state.title}/>
          <textarea
            row="3" 
            name="content"
            className="form-control" 
            value={this.state.content} 
            placeholder="请输入正文"
            onChange={this.updateNoteContent}>
          </textarea>
        </div>
      </div>
    )
  }
}