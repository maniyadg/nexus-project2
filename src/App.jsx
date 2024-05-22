import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import Services from './component/Services'
import CaseStudies from './component/CaseStudies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Main />
      <Services />
      <CaseStudies />
    </div>
  )
}

export default App
