import React from 'react'
import { Navbar } from './Pages/Navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './Pages/Home'
import { BottomMenu } from './Components/BottomMenu'
import {Footer} from './Components/Footer'
import { SignIn } from './Components/SignIn'
import { SignUp } from './Components/SignUp'
import { ConditionRoute } from './Components/ConditionRoute'
import { AdminDashboard } from './Components/AdminDashboard'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { ProductDetail } from './Pages/ProductDetail'
import { PromoDisplay } from './Components/PromoDisplay'

const App = () => {
  return (
    <div>
      <Router>
        <ConditionRoute>
          <PromoDisplay/>
          <Navbar/>
        </ConditionRoute>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/productdetail/:id' element={<ProductDetail/>}/>
          <Route path='/admindashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
        </Routes>
        <ConditionRoute>
          <BottomMenu/>
          <Footer/>
        </ConditionRoute>
      </Router>
    </div>
  )
}

export default App
