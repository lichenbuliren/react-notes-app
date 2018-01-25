import React, { Component } from 'react';
import '../assets/styles/editor.css'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.props.activeNote
    }
  }

  handleChange = (e, type) => {
    const val = e.target.value
    this.update[type](val)
  }

  update = {
    title: title => {
      console.log('update title')
      this.setState(prevState => ({
        note: { ...prevState.note, ...{ title }}
      }))
    },
    content: content => {
      console.log('update content')
      this.setState(prevState => ({
        note: { ...prevState.note, ...{ content }}
      }))
    }
  }

  handleAdd = () => {
    this.props.handleAdd(this.state.note)
    this.setState({
      note: this.props.activeNote
    })
  }
  
  handleUpdate = () => {
    this.props.handleUpdate(this.state.note)
  }

  render() {
    let btn = null
    if (this.props.notes.some(note => note.id === this.props.activeNote.id)) {
      btn = <a className="btn btn-primary" onClick={this.handleUpdate}>更新</a>
    } else {
      btn = <a className="btn btn-primary" onClick={this.handleAdd}>添加</a>
    }
    return (
      <div className="note-editor">
        <div className="form-group">
          <input type="text" name="title"
            className="title form-control"
            placeholder="请输入标题"
            value={this.state.note.title}
            onChange={(e) => this.handleChange(e, 'title')}/>
          <textarea
            row="3" 
            name="content"
            className="form-control"
            placeholder="请输入正文"
            value={this.state.note.content}
            onChange={(e) => this.handleChange(e, 'content')}>
          </textarea>
          {btn}
        </div>
      </div>
    )
  }
}