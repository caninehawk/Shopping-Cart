import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// Router stuff
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from './Routes.jsx'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
