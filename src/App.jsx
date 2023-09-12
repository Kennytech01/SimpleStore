import React from 'react'
import { Navbar } from './Pages/Navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './Pages/Home'
import { FooterBar } from './Components/FooterBar'
// import {Shop} from './Pages/Shop'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/shop' element={<Shop/>} /> */}
        </Routes>
        <FooterBar/>
      </Router>
    </div>
  )
}

export default App