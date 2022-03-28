import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
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
        const filteredCoins = likedCoins.filter((coin) => coin.id !== id)
        updateCoins(filteredCoins)
      })
  }

  const likedCoinList = likedCoins.map((coin) => (
    <LikedCoin key={coin.id} coin={coin} handleDelete={handleDelete} /> 
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
          Browse most popular cryptos
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