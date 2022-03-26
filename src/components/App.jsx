import '../index.css'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'
import { Routes, Route, Link } from 'react-router-dom'
import { formatCoin } from '../util/formatCoinData'
import { Container, Skeleton, Typography } from '@mui/material'

function App() {
  const [coins, setCoins] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [formattedCoins, setFormattedCoins] = useState([])
  const [likedCoins, setLikedCoins] = useState([])

  useEffect(() => {
    const marketsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=false'
    fetch(marketsUrl)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data)
        setIsLoaded(true)
      })
      .catch((err) => console.log(err, "There was a problem loading data from CoinGecko's API. Please try again later."))
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
      <Container>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Portfolio 
                likedCoins={likedCoins} 
                updateCoins={setLikedCoins} 
              />
            } />
          <Route
            path='/coins'
            element={
              <CoinList 
                formattedCoins={formattedCoins} 
                isLoaded={isLoaded} 
              />
            } />
          <Route
            path={isLoaded ? '/coins/:id' : '/'}
            element={
              <Coin 
                formattedCoins={formattedCoins} 
                onAddCoin={addCoin} 
                likedCoins={likedCoins} 
              />
            } />
          <Route
            path='*'
            element={
              <>
                <Skeleton animation='wave' height='50vh' width='50vh' variant='circular'>
                </Skeleton>
                <Typography variant='body2' sx={{ margin: '10vw' }}>
                  <Link to='/'>Lost connection... Go back.</Link>
                </Typography>
              </>
            } />
        </Routes>
      </Container>
  )
}

export default App