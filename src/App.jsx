import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
