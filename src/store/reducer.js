import { combineReducers } from 'redux'
import { VisibilityFilters, ADD_NOTE, DELETE_NOTE, TOGGLE_FAVORITE, UPDATE_NOTE, FILTER_LIST, NEW_NOTE } from './actionTypes';

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, {
        id: +new Date(),
        favorite: false,
        title: action.note.title,
        content: action.note.content
      }]
      break;
    case DELETE_NOTE:
      const delIndex = state.find(note => note.id === action.id)
      return [
        ...state.slice(0, delIndex),
        ...state.slice(delIndex + 1, state.length - 1)
      ]
      break;
    case TOGGLE_FAVORITE:
      let list = state.map(note => {
        if (note.id === action.id) {
          note.favorite = !note.favorite
        }
        return note;
      })
      return [
        ...state.map(note => {
          if (note.id === action.id) {
            note.favorite = !note.favorite
          }
          return note
        })
      ]
      break;
    case UPDATE_NOTE:
      return [
        ...state.map(note => {
          if (note.id === action.note.id) {
            note = action.note
          }
          return note
        })
      ]
      break;
    default:
      break;
  }
  return state;
}

export const filterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case FILTER_LIST:
      return {
        ...state,
        ...{
          filterType: action.filterType
        }
      }
      break;
    default:
      return state
      break;
  }
}

export const activeNoteReducer = (state = { id: +new Date(), favorite: false, title: '', content: ''}, action) => {
  switch (action.type) {
    case UPDATE_NOTE:
      return {
        ...state,
        ...action.note
      }
      break;
    case NEW_NOTE:
      return {
        ...state,
        ...{
          id: +new Date(),
          title: '',
          content: '',
          favorite: false
        }
      }
      break;
    case ADD_NOTE:
      return {
        ...state,
        ...action.note
      }
      break;
    case TOGGLE_FAVORITE:
      return {
        ...state,
        ...{
          favorite: !state.favorite
        }
      }
      break;
    default:
      return state
      break;
  }
}


export const reducers = combineReducers({
  filterType: filterReducer,
  notes: noteReducer,
  activeNote: activeNoteReducer
})