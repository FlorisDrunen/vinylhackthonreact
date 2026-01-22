import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Posts from './pages/posts'
import Shop from './pages/shop'
import './index.css'


function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </>
  )
}

export default App