import React from 'react'
import Home from './Page/Home'
import Shop from './Page/Shop'
import Blog from './Page/Blog'
import About from './Page/About'
import Contact from './Page/Contact'
import Features from './Page/Features'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductLish'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'





function App() {
  return (
    <div>
      <Header/>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/features' element={<Features/>}/>
       <Route path='/productlish' element={<ProductList/>}/>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
