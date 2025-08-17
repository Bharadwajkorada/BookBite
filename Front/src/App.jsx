import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import AllList from './Pages/List/AllList';
import './App.css'
import Login_ from './Pages/Authorization/Login_';
import Signup_ from './Pages/Authorization/Signup_';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/list' element={<AllList/>}/>
          <Route path='/login' element={<Login_/>}/>
          <Route path='/signup' element={<Signup_/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App