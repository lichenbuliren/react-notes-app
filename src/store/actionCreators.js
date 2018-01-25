import * as actionType from './actionTypes'
import { VisibilityFilters } from './actionTypes';

const addNote = (note = { title: '', content: '', id: +new Date(), favorite: false }) => {
  return {
    note,
    type: actionType.ADD_NOTE
  }
}

const newNote = (note = { id: +new Date() }) => {
  return {
    note,
    type: actionType.NEW_NOTE
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

const filterList = (filterType = VisibilityFilters.ALL) => {
  return {
    type: actionType.FILTER_LIST,
    filterType
  }
}

export {
  addNote,
  newNote,
  updateNote,
  deleteNote,
  toggleFavorite,
  filterList
}