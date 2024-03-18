import React from 'react'
import 'react-day-picker/dist/style.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes/router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-[1440px] mx-auto'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
