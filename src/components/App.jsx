// import './App.css';
import React, { useEffect, useState } from "react"
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [coins, setCoins] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=true')
      .then((res) => res.json())
      .then(data => {
        setCoins(data);
        setIsLoaded(true);
      })
  }, []);

  return (
    <Router>
      <div>
        <header>
          <h1>CRYPTO EXPLORER</h1>
        </header>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <Portfolio />
            } 
          />
          <Route 
            path="/coins" 
            element={
              <CoinList coins={coins} isLoaded={isLoaded} />
            } 
          />
          <Route 
            path="/coins/:id" 
            element={
              <Coin />
            } 
          />
        </Routes>  
      </div>
    </Router>
  )
}

export default App