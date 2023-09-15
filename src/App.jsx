import React from 'react'
import { Navbar } from './Pages/Navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './Pages/Home'
import { FooterBar } from './Components/FooterBar'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <FooterBar/>
      </Router>
    </div>
  )
}

export default App
