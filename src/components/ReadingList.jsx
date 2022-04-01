import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import LikedCoin from './LikedCoin'
import { databaseUrl } from '../util/urls'

function ReadingList({ likedCoins, updateCoins }) {
  const navigate = useNavigate()

  const handleDelete = (id) => {
    const deleteUrl = databaseUrl + '/' + id
    fetch(deleteUrl, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        const filteredCoins = likedCoins.filter((coin) => coin.id !== id)
        updateCoins(filteredCoins)
      })
      .catch(console.log)
  }

  const likedCoinList = likedCoins.map((coin) => (
    <LikedCoin 
      key={coin.id} 
      coin={coin} 
      onDelete={handleDelete} 
    /> 
  ))

  return (
    <FavoritesBox>
      <Title variant='h5' gutterBottom >
        Reading List
      </Title>
      {likedCoinList}
      <CallToAction 
        variant='outlined' 
        size='large' 
        onClick={() => navigate('/coins')}
        >
          Browse the top cryptocurrencies
      </CallToAction>
    </FavoritesBox>
  )
}

export default ReadingList

const Title = styled(Typography)({
  textAlign: 'center',
})

const FavoritesBox = styled(Box)({
  height: '80vh',
})

const CallToAction = styled(Button)({
  margin: '60px 0', 
  padding: '30px', 
  display: 'flex', 
  alignItems: 'center', 
  width: '100%',
})