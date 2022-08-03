import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useTypedSelector } from './hooks/useTypedSelector'
import { MyFormPage } from './pages/MyFormPage'
import { MyFormsPage } from './pages/MyFormsPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { NewForm } from './pages/NewForm'
import { FormPage } from './pages/FormPage'
import { useQuery } from './hooks/useQuery'
import { MainPage } from './pages/MainPage'

export const Router : React.FC = () => {
  const user = useTypedSelector(state => state.user)
  const query = useQuery()
  const location = useLocation()


  const routes : JSX.Element = user.user?.accessToken ?
  <>
      <Route path="/form/:id" element={<FormPage />} />
      <Route path="/my-forms" element={<MyFormsPage />} />
      <Route path="/my-forms/:id" element={<MyFormPage />} />
      <Route path="/my-forms/new" element={<NewForm />} />
      <Route path="/my-forms/update/:id" element={<NewForm />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={
        query.get('url')
        ? 
        <Navigate to={(query.get('url') as string)} /> 
        :
        <Navigate to={'/'} />
      } />
  </>
  : 
  <>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="*" element={<Navigate to={`/login?url=${location.pathname}`} />} />
  </>
  
  return (
    <Routes>
      {routes}
    </Routes>
  )
}