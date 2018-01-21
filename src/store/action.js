import * as actionType from './actionTypes'

const addNote = (note = { title: '', content: ''}) => {
  return {
    note,
    type: actionType.ADD_NOTE
  }
}

const updateNote = (note) => {
  return {
    type: actionType.UPDATE_NOTE,
    note
  }
}

const deleteNote = (id) => {
  return {
    type: actionType.DELETE_NOTE,
    id
  }
}

const toggleFavorite = (id) => {
  return {
    type: actionType.TOGGLE_FAVORITE,
    id
  }
}

const filterList = (filterType) => {
  return {
    type: actionType.FILTER_LIST,
    filterType
  }
}

export {
  addNote
}