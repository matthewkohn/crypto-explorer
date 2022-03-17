import { Container, Grid } from '@mui/material'
import React from 'react'
import LikedCoin from './LikedCoin'

function Portfolio({ likedCoins, updateCoins }) {
  
  const deleteCoin = (id) => {
    const newCoins = likedCoins.filter((coin) => coin.id !== id)
    updateCoins(newCoins)
  }

  const likedCoinList = likedCoins.map((coin) => (
    <LikedCoin key={coin.id} coin={coin} onDelete={deleteCoin} /> )
  )

  return (
    <Container>
      <h2>Your Portfolio</h2>
      <Grid container spacing={3}>
        {likedCoinList}
      </Grid>
    </Container>
  )
}

export default Portfolio