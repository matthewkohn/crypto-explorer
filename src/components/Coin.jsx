import React, { useEffect, useState } from 'react'
import { Paper, Grid, Typography, Button } from '@mui/material'
// import { Paper, Grid, IconButton, Typography, Button } from '@mui/material'
// import { StarOutline } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useNavigate, useParams } from 'react-router-dom'


const Img = styled('img')({
  margin: 'auto',
  padding: '0 20px',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Coin({ coinList, addCoin, likedCoins }) {
  const [description, setDescription] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const param = useParams()
  const navigate = useNavigate()
  const currentCoin = coinList.filter((item) => item.id === param.id)[0]
  const { id, rank, image, symbol, name, price, percentChange, high24h, low24h, marketCap } = currentCoin; 

  useEffect(() => {
    const URL = `https://api.coingecko.com/api/v3/coins/${id}`
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setDescription(data.description.en))

    const found = likedCoins.some(obj => obj.param === id)
    setIsLiked(found)
  }, [id, likedCoins])

  function handleAddCoin() {
    fetch('http://localhost:4000/coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, image, param: id, description })
    })
      .then((res) => res.json())
      .then((data) => addCoin(data))
      
    navigate('/')
  }

  return (
    <Paper>
      <Grid container spacing={20}>
        <Grid item>
          <Img src={image} alt={name} />
        </Grid>
        <Grid item>
          <Typography variant='h2'>{name}</Typography>
          <Typography variant='h3'>{price}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={12} sx={{ padding: '40px' }}>
        <Grid item>
          <Button 
            variant='outlined' 
            size='large' 
            // sx={{  padding: '30px', display: 'flex', alignItems: 'center' }}
            onClick={isLiked ? () => navigate('/') : handleAddCoin}
          >
            {isLiked ? `${name} is awesome. Keep learning.` : 'Add to Portfolio'}
          </Button>
        </Grid>
        <Grid item>
          
          <Typography variant='h6' gutterBottom >
            In the last 24 hours:
          </Typography>
          <Typography>High: {high24h}</Typography>
          <Typography>Low: {low24h}</Typography>
          <Typography 
            gutterBottom 
            sx={ percentChange > 0 ? {color:'green'} : {color:'red'} }
          >
            Change: {percentChange}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom >
            Fun facts:
          </Typography>
          <Typography>Symbol: {symbol}</Typography>
          <Typography>Market Cap Rank: #{rank}</Typography>
          <Typography>Market Cap: {marketCap}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Coin