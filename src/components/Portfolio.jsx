import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LikedCoin from './LikedCoin'

function Portfolio({ likedCoins, updateCoins }) {

  const navigate = useNavigate()

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
      <Button 
        variant="outlined" 
        size="large" 
        sx={{ margin: "60px 0", padding: "30px", display: "flex", alignItems: "center" }}
        onClick={() => navigate("/coins")}
        >
          Browse most popular cryptos
      </Button>
    </Container>
  )
}

export default Portfolio