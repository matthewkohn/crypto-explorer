import '../index.css'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import ReadingList from './ReadingList'
import CoinList from './CoinList'
import Coin from './Coin'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Container, Button, Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { formatCoin } from '../util/formatCoinData'
import { databaseUrl, marketsUrl } from '../util/urls'

function App() {
  const [coinList, setCoinList] = useState([])
  const [likedCoins, setLikedCoins] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  
  const navigate = useNavigate()

  useEffect(() => {
    fetch(marketsUrl)
      .then((res) => res.json())
      .then((coins) => {
        const formattedCoins = coins.map((coin) => formatCoin(coin))
        setCoinList(formattedCoins)
        setIsLoaded(true)
      })
      .catch(console.log)
    
    fetch(databaseUrl)
      .then((res) => res.json())
      .then((savedCoins) => setLikedCoins(savedCoins))
      .catch(console.log)
  }, [])

  function addCoin(newCoin) {
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
              <ReadingList 
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