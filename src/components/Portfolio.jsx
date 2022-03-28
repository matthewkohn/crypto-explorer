import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LikedCoin from './LikedCoin'
import { getDatabaseUrl } from '../util/urls'

function Portfolio({ likedCoins, updateCoins }) {

  const navigate = useNavigate()

  const handleDelete = (id) => {
    const databaseUrl = getDatabaseUrl()
    fetch(databaseUrl + `/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        const newCoins = likedCoins.filter((coin) => coin.id !== id)
        updateCoins(newCoins)
      })
  }

  const likedCoinList = likedCoins.map((coin) => (
    <LikedCoin key={coin.id} coin={coin} handleDelete={handleDelete} /> 
    ))

  return (
    <Box sx={{ height: '100vh'}}>
      <Typography variant='h6' gutterBottom>
        Select a cryptocurrency to learn more
      </Typography>
      {likedCoinList}
      <Button 
        variant='outlined' 
        size='large' 
        sx={{ margin: '60px 0', padding: '30px', display: 'flex', alignItems: 'center' }}
        onClick={() => navigate('/coins')}
        >
          Browse most popular cryptos
      </Button>
    </Box>
  )
}

export default Portfolio