import { useState } from 'react'
import './App.css'
// import Basic2 from './components/Basic2'
// import BasicUseEffect from "./components/BasicUseEffect";

import TimerContainer from "./components/TimerContainer";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Basic2/>
      <BasicUseEffect /> */}
      <TimerContainer />
    </>
  )
}

export default App
