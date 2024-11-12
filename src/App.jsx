

import { useState } from 'react'
import Paint from './Paint'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Pallete from './pallete'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Header/>
        <Hero/>
        <About/>
        <Pallete/>
        <Card/>
      </div>
      

  )
}

export default App
