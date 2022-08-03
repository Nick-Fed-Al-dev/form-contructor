import { IError } from "../IError";
import { INote } from "../INote";

export interface INoteState{
  notes: INote[] | []
  error?: IError
  loading: boolean
}

export enum NoteActionTypes{
  NOTE_REQUEST = 'NOTE_REQUEST',
  NOTES_RECEIVED = 'NOTES_RECEIVED',
  NOTE_CREATED = 'NOTE_CREATED',
  NOTE_ERROR = 'NOTE_ERROR'
}

interface INoteRequestAction{
  type: NoteActionTypes.NOTE_REQUEST
}

interface INotesReceivedAction{
  type: NoteActionTypes.NOTES_RECEIVED
  payload: INote[]
}

interface INoteCreatedAction{
  type: NoteActionTypes.NOTE_CREATED
  payload: INote
}

interface INoteErrorAction{
  type: NoteActionTypes.NOTE_ERROR
  payload: IError
}

export type NoteAction = 
  INoteRequestAction |
  INotesReceivedAction |
  INoteCreatedAction |
  INoteErrorAction