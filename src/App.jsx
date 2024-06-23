import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomQuotes from './Components/RandomQuotes/RandomQuotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RandomQuotes/>
      </div>
       
    </>
  )
}

export default App
