import { LCNames } from './../types/LCTypes';

export class LC {

  static get<T>(key : LCNames) : T {
    const value = localStorage.getItem(key)
    return JSON.parse((value as string))
    
  }

  static set<T>(key : LCNames, value : T) : void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  static clear(key : LCNames) : void {
    localStorage.removeItem(key)
  }
}