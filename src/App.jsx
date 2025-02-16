import React,{ useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Video from './component/Video'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Video/>
    </>
  )
}

export default App
