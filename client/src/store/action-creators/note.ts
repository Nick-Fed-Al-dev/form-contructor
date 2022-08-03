import { NoteService } from './../../service/NoteService';
import { NoteAction, NoteActionTypes } from './../../types/redux/note';
import { Dispatch } from 'react';
import { INote } from './../../types/INote';

export const getNotes = (noteId : string) : Function => {

  return async (dispatch : Dispatch<NoteAction>) => {
    try {
      dispatch({type: NoteActionTypes.NOTE_REQUEST})
      const notes = await NoteService.getNotes(noteId)
      dispatch({type: NoteActionTypes.NOTES_RECEIVED, payload: notes})
    } catch (error : any) {
      dispatch({type: NoteActionTypes.NOTE_ERROR, payload: error})
    }
  }
}

export const createNote = (noteData : INote) : Function => {
  
  return async (dispatch : Dispatch<NoteAction>) => {
    try {
      dispatch({type: NoteActionTypes.NOTE_REQUEST})
      const note = await NoteService.createNote(noteData)
      dispatch({type: NoteActionTypes.NOTE_CREATED, payload: note})
    } catch (error : any) {
      dispatch({type: NoteActionTypes.NOTE_ERROR, payload: error})
    }
  }
}