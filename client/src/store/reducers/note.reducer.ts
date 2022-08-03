import { INoteState, NoteAction, NoteActionTypes } from "../../types/redux/note";


const initialState : INoteState = {
  notes: [],
  error: undefined,
  loading: false
}

export const noteReducer = (state = initialState, action : NoteAction) : INoteState => {
  switch (action.type) {
    case NoteActionTypes.NOTE_REQUEST:
      return {...state, loading: true}
    case NoteActionTypes.NOTES_RECEIVED:
      return {...state, loading: false, notes: action.payload}  
    case NoteActionTypes.NOTE_CREATED:
      return {...state, loading: false, notes: [...state.notes, action.payload]}
    case NoteActionTypes.NOTE_ERROR:
      return {...state, loading: false, error: action.payload}  
    default:
      return state
  }
}