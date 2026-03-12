import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// eslint-disable-next-line react-refresh/only-export-components
function MyApp(){
  return(
    <>
    <h1>My App Customized</h1>
    </>
  )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click Me to Visit Google'
// }

// const anotherElement = (
//   <a href="https://google.com" traget = "_blank">Visit Google</a>
// )

 
const reactElement = React.createElement(
 'a',
 {href: 'https://google.com', target:'_blank'},
 'Click TO Visit Google'
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <ReactElement/>
  //   <MyApp/>
  //   <App />
  // </StrictMode>,
  // anotherElement,
  reactElement
)
