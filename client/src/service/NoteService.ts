import { AxiosResponse } from 'axios';
import { $api } from "../api";
import { INote } from "../types/INote";
import { ISuccessResponse } from '../types/ISuccessResponse';

export class NoteService{

  static async getNotes(formId : string) : Promise<INote[]>{
    const response : AxiosResponse<ISuccessResponse<INote[]>> = await $api.get('/note')
    return response.data.data.filter(note => note.form === formId)
  }

  static async getNote(noteId : string) : Promise<INote>{
    const response : AxiosResponse<ISuccessResponse<INote>> = await $api.get(`/note/${noteId}`)
    return response.data.data
  }

  static async createNote(noteData : INote) : Promise<INote>{
    const response : AxiosResponse<ISuccessResponse<INote>> = await $api.post('/note', noteData)
    return response.data.data
  }
}