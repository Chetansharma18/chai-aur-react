
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import React from 'react'

// function MyApp() {
//   return (
//     <div>MyApp</div>
//   )
// }

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser 
)

// direct variable injeact

createRoot(document.getElementById('root')).render(

    // <App />

    reactElement

)
