import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CountryPage from './components/country-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CountryPage /> 
    </div>
  )
}

export default App
