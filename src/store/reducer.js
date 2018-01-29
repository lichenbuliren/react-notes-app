import {
  VisibilityFilters,
  ADD_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE,
  UPDATE_NOTE,
  TOGGLE_FILTERTYPE,
  NEW_NOTE
} from './actionTypes';

const initState = {
  notes: [],
  filterType: VisibilityFilters.SHOW_ALL,
  activeNote: {}
};

const delArrayEl = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)];

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = action.note;
      return {
        ...state,
        ...{
          activeNote: {...newNote},
          notes: [...state.notes, newNote]
        }
      };
    case DELETE_NOTE:
      const delIndex = state.notes.find(note => note.id === action.id);
      const newNotes = delArrayEl(state.notes, delIndex);
      return {
        ...state,
        ...{
          notes: [...newNotes],
          activeNote: {...newNotes[0]}
        }
      };
    case TOGGLE_FAVORITE:
      state.notes.map(note => {
        if (note.id === state.activeNote.id) {
          note.favorite = !note.favorite;
        }
        return note;
      })
      return {
        ...state,
        ...{
          activeNote: {
            ...state.activeNote,
            ...{ favorite: !state.activeNote.favorite }
          }
        }
      };
    case UPDATE_NOTE:
      return {
        ...state,
        ...{
          notes: [
            ...state.notes.map(note => {
              if (note.id === action.note.id) {
                note = action.note;
              }
              return note;
            })
          ],
          activeNote: action.note
        }
      };
    case NEW_NOTE:
      return {
        ...state,
        ...{
          activeNote: action.note
        }
      };
    case TOGGLE_FILTERTYPE:
      return {
        ...state,
        ...{
          filterType: action.filterType
        }
      }
    default:
      break;
  }
  return state;
};

export default noteReducer;
