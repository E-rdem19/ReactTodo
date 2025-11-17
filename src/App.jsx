import { useState } from 'react'
import Todo from './components/todo'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#EFECE3] h-screen grid">
    <Todo/>

    </div>
  )
}

export default App
