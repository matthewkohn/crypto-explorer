import '../index.css'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import ReadingList from './ReadingList'
import CoinList from './CoinList'
import Coin from './Coin'
import ContactUs from './ContactUs'
import ErrorCard from './ErrorCard'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { databaseUrl } from '../util/urls'

function App() {
  const [likedCoins, setLikedCoins] = useState([])

  useEffect(() => {
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
              <ReadingList likedCoins={ likedCoins } updateCoins={ setLikedCoins } />
            } 
          />
          <Route
            path='/coins'
            element={ <CoinList /> } 
          />
          <Route
            path='/contact'
            element={ <ContactUs /> } 
          />
          <Route
            path='/coins/:id'
            element={
              <Coin addCoin={ addCoin } likedCoins={ likedCoins } />
            } 
          />
          <Route
            path='*'
            element={ <ErrorCard /> } 
          />
        </Routes>

      </Container>
  )
}

export default App