import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './contexts/storeContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StoreContextProvider>

      <App />
    </StoreContextProvider>
  </BrowserRouter>

)