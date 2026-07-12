import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
