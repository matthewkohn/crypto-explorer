import '../index.css';
import React, { useEffect, useState } from "react"
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'
import { Routes, Route, Link } from 'react-router-dom'
import { formatCoin } from "../functions/formatCoinData"
import { Container, Typography } from '@mui/material'
import { ThemeProvider } from 'styled-components'

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
    <ThemeProvider theme={{background: 'fefefe'}}>
      <Container>
        <Typography variant="h2" gutterBottom>
          CRYPTO EXPLORER
        </Typography>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio 
                likedCoins={likedCoins} 
                updateCoins={setLikedCoins} 
              />
            } />
          <Route
            path="/coins"
            element={
              <CoinList 
                formattedCoins={formattedCoins} 
                isLoaded={isLoaded} 
              />
            } />
          <Route
            path={isLoaded ? "/coins/:id" : "/"}
            element={
              <Coin 
                formattedCoins={formattedCoins} 
                onAddCoin={addCoin} 
                likedCoins={likedCoins} 
              />
            } />
          <Route
            path="*"
            element={
              <>
                <Typography variant="h2" sx={{ color: 'red' }}>Page Loading...</Typography>
                <Link to="/">If this takes to long, go back to Portfolio.</Link>
              </>
            } />
        </Routes>
      </Container>
    </ThemeProvider>
  )
}

export default App