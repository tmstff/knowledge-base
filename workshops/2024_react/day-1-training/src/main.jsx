import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainLayout from './layouts/MainLayout/index.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./router/router.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
