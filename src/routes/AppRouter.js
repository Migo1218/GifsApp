import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from '../components/Favoritos'
import Main from '../views/Main'


export default function AppRouter() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/favoritos" element={<Favoritos />} />
          
          
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}
