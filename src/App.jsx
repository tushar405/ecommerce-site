import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Shops from './Pages/Shops/Shops'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
   <>
  
  <BrowserRouter>
  <Nav/>
  <Routes>
<Route path="/" element={<Home />}> </Route>
<Route path="/Shop" element={<Shops />}> </Route>
<Route path="/Cart" element={<Cart />}> </Route>
<Route path="/Contact" element={<Contact />}> </Route>


  </Routes>
<Footer />
  </BrowserRouter>
   </>
  )
}

export default App
