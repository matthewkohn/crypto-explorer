import '../index.css'
import React from 'react'
import Header from './Header'
import ReadingList from './ReadingList'
import CoinList from './CoinList'
import Coin from './Coin'
import ContactUs from './ContactUs'
import ErrorCard from './ErrorCard'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'

function App() {

  return (
      <Container>
        <Header />
        
        <Routes>
          <Route
            path='/'
            element={ <ReadingList /> } 
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
            element={ <Coin /> } 
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