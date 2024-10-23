import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Bounce, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(

  <StrictMode>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= { Bounce}
/>


{/* <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false} //false
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= {Bounce}
/> */}

    <App />
  </StrictMode>,
)
