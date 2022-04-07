import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { CoinProvider } from './context/coinContext'
import { LikedCoinProvider } from './context/likedCoinContext'

ReactDOM.render(
  <BrowserRouter>
    <CoinProvider>
      <LikedCoinProvider>
        <App />
      </LikedCoinProvider>
    </CoinProvider>
  </BrowserRouter>,  
  document.getElementById('root')
)