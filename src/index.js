import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { CoinProvider } from './context/coinContext'

ReactDOM.render(
  <BrowserRouter>
    <CoinProvider>
      <App />
    </CoinProvider>
  </BrowserRouter>,  
  document.getElementById('root')
)