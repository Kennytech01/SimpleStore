import React from 'react'
import { Navbar } from './Pages/Navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './Pages/Home'
import { BottomMenu } from './Components/BottomMenu'
import {Footer} from './Components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <BottomMenu/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
