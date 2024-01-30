/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-whyS'>
        <Landing />
      </div>
    </>
  )
}

export default App
