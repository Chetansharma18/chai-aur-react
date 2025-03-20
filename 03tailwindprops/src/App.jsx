import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1 className="text-3xl font-bold underline ">
        Hello Chetan
      </h1>
      <Card username="chetan sharma" btnText="Click me"/>
      <Card username="Jonkey Rodes" btnText="Visit Profile"/>
      <Test fullname="shital sharma" role="Developer"/>
      <Test fullname="shital sharma"/>
    </>
  )
} 

export default App