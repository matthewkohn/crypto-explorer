// import './App.css';
import React from 'react'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'


const App = () => {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <CoinList />
      <Coin />
    </div>
  )
}

export default App