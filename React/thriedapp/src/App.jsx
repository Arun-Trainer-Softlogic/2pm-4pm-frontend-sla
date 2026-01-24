

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import Dashboard from './Dashboard'
import Products from './Product'
import Services from './Services'
import ServicesPage from './ServicesPage'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      <Footer />


    </>


  )
}

export default App
