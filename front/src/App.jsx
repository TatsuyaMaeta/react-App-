import { useState } from 'react'
import './App.css'
import Basic2 from './components/Basic2'
import BasicUseEffect from "./components/BasicUseEffect";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Basic2/>
      <BasicUseEffect />
    </>
  )
}

export default App
