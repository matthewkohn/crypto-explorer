import '../index.css'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { formatCoin } from '../util/formatCoinData'
import { Container, Button, Card } from '@mui/material'
import { styled } from '@mui/material/styles'
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
      .catch(console.log)
    
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
                likedCoins={ likedCoins } 
                updateCoins={ setLikedCoins } 
              />
            } />
          <Route
            path='/coins'
            element={
              <CoinList 
                coinList={ coinList } 
                isLoaded={ isLoaded } 
              />
            } />
          <Route
            path='/coins/:id'
            element={
              <Coin 
                addCoin={ addCoin } 
                coinList={ coinList } 
                likedCoins={ likedCoins } 
              />
            } />
          <Route
            path='*'
            element={
              <ErrorCard>
                <Button 
                  color='error'
                  onClick={() => navigate('/coins')}
                  variant='outlined' 
                  >
                    404 Not Found. Try going back?
                </Button>
              </ErrorCard>
            } />
        </Routes>
      </Container>
  )
}

export default App

const ErrorCard = styled(Card)({
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center',
  margin: '60px 0', 
  padding: '30px', 
})