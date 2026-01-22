

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import Dashboard from './Dashboard'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/products" element={<h1>Products Page</h1>} />
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
