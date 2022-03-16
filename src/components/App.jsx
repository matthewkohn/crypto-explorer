// import './App.css';
import React, { useEffect, useState } from "react"
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'
import { Routes, Route, Link } from 'react-router-dom'
import { formatCoin } from "../functions/formatCoinData"


function App() {
  const [coins, setCoins] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [formattedCoins, setFormattedCoins] = useState([])

  useEffect(() => {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=true'
    fetch(apiUrl)
      .then((res) => res.json())
      .then(data => {
        setCoins(data)
        setIsLoaded(true)
      })
  }, [])

  useEffect(() => {
    const newCoins = coins.map((coin) => formatCoin(coin))
    setFormattedCoins(newCoins)
  }, [coins])


  return (
    <div>
      <header>
        <h1>CRYPTO EXPLORER</h1>
      </header>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Portfolio />} />
        <Route
          path="/coins"
          element={<CoinList formattedCoins={formattedCoins} isLoaded={isLoaded} />} />
        <Route
          path="/coins/:id"
          element={<Coin formattedCoins={formattedCoins} />} />
        <Route
          path="*"
          element={
            <>
              <p>404 This page isn't here anymore.</p>
              <Link to="/">Go back to Portfolio.</Link>
            </>
          } />
      </Routes>
    </div>
  )
}

export default App