import { Container, Typography } from '@mui/material'
import React from 'react'
import LikedCoin from './LikedCoin'

function Portfolio({ likedCoins, updateCoins }) {

  const handleDelete = (id) => {
    const URL = "http://localhost:4000/coins/"
    fetch(URL + id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        const newCoins = likedCoins.filter((coin) => coin.id !== id)
        updateCoins(newCoins)
      })
  }

  const likedCoinList = likedCoins.map((coin) => (
    <LikedCoin key={coin.id} coin={coin} handleDelete={handleDelete} /> )
  )

  console.log(likedCoinList)
  return (
    <Container>
      <Typography variant="h6" gutterBottom>Learn more about your favorite cryptocurrencies</Typography>
      {likedCoinList}
    </Container>
  )
}

export default Portfolio