// import './App.css';
import React from 'react'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import CoinList from './CoinList'
import Coin from './Coin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
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
              <CoinList />
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