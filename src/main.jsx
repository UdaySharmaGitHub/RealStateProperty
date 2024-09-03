import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Route,RouterProvider, createBrowserRouter,createRoutesFromElements  } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Signup } from './pages/Signup/Signup.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
