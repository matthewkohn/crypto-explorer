import '../index.css'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { formatCoin } from '../util/formatCoinData'
import { Container, Button, Card } from '@mui/material'
import { getDatabaseUrl, getMarketsUrl } from '../util/urls'

function App() {
  const [coinList, setCoinList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [likedCoins, setLikedCoins] = useState([])
  
  const navigate = useNavigate()

  useEffect(() => {
    const marketsUrl = getMarketsUrl()
    fetch(marketsUrl)
      .then((res) => res.json())
      .then((coins) => {
        const formattedCoins = coins.map((coin) => formatCoin(coin))
        setCoinList(formattedCoins)
        setIsLoaded(true)
      })
      .catch((err) => console.log(err, "There was a problem loading data from CoinGecko's API. Please try again later."))
    
    const databaseUrl = getDatabaseUrl()
    fetch(databaseUrl)
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
        <Header />
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
                coinList={coinList} 
                isLoaded={isLoaded} 
              />
            } />
          <Route
            path={isLoaded ? '/coins/:id' : '/'}
            element={
              <Coin 
                coinList={coinList} 
                addCoin={addCoin} 
                likedCoins={likedCoins} 
              />
            } />
          <Route
            path='*'
            element={
              <Card sx={{ margin: '60px 0', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Button 
                  color='error'
                  onClick={() => navigate('/coins')}
                  variant='outlined' 
                  >
                    404 Not Found. Try going back?
                </Button>
              </Card>
            } />
        </Routes>
      </Container>
  )
}

export default App