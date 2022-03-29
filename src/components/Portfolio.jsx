import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import LikedCoin from './LikedCoin'
import { getDatabaseUrl } from '../util/urls'

function Portfolio({ likedCoins, updateCoins }) {
  const databaseUrl = getDatabaseUrl()
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
    <PortfolioBox>
      <Typography variant='h6' gutterBottom>
        Select a cryptocurrency to learn more
      </Typography>
      {likedCoinList}
      <CallToAction 
        variant='outlined' 
        size='large' 
        onClick={() => navigate('/coins')}
        >
          Browse the top cryptocurrencies
      </CallToAction>
    </PortfolioBox>
  )
}

export default Portfolio

const PortfolioBox = styled(Box)({
  height: '100vh',
})

const CallToAction = styled(Button)({
  margin: '60px 0', 
  padding: '30px', 
  display: 'flex', 
  alignItems: 'center', 
  width: '100%',
})