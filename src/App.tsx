/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { useWindowSize } from './hooks/useWindowSize';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Alert } from './components/Alert';
import { getTheme } from './theme';


export const App : React.FC = () => {

  const size = useWindowSize()
  const myTheme = getTheme(Number(size.width))
  const { user, form } = useTypedSelector(store => store)
  const {
    checkAuth,
    openClose, 
    logout, 
    checkForms 
  } = useActions()

  useEffect(() => {
    checkAuth()
    checkForms()
  }, [])

  useEffect(() => {
    if(user.error?.error?.message?.length){
      openClose((user.error?.error?.message as string), 'error')
    }
  }, [user.error])

  useEffect(() => {
    if(form.error?.error?.message?.length){
      openClose((form.error?.error?.message as string), 'error')
      logout()
    }
  }, [form.error])


  return (
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <Router />
          <Alert />
        </BrowserRouter>
      </ThemeProvider>
  )
}