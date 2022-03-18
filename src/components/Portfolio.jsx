import { Grid, Paper, Typography } from '@mui/material'
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
    <Paper sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h5" gutterBottom>Your Portfolio</Typography>
      <Grid container spacing={3} sx={{justifyContent: 'center'}}>
        {likedCoinList}
      </Grid>
    </Paper>
  )
}

export default Portfolio