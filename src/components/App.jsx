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
  const [likedCoins, setLikedCoins] = useState([])

  useEffect(() => {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=true'
    fetch(apiUrl)
      .then((res) => res.json())
      .then(data => {
        setCoins(data)
        setIsLoaded(true)
      })
      .catch(err => console.log(err, "There was a problem loading data from CoinGecko's API. Please try again later."))
  }, [])

  useEffect(() => {
    const newCoins = coins.map((coin) => formatCoin(coin))
    setFormattedCoins(newCoins)
  }, [coins])

  useEffect(() => {
    fetch('http://localhost:4000/coins')
      .then((res) => res.json())
      .then((savedCoins) => setLikedCoins(savedCoins))
      .catch(console.log)
  }, [])

  const addCoin = (newCoin) => {
    const updatedCoins = [...likedCoins, newCoin]
    setLikedCoins(updatedCoins)
  }

  return (
    <div>
      <header>
        <h1>CRYPTO EXPLORER</h1>
      </header>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Portfolio likedCoins={likedCoins} />} />
        <Route
          path="/coins"
          element={<CoinList formattedCoins={formattedCoins} isLoaded={isLoaded} />} />
        <Route
          path="/coins/:id"
          element={<Coin formattedCoins={formattedCoins} onAddCoin={addCoin} />} />
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