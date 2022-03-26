import React, { useEffect, useState } from 'react'
import { Paper, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate, useParams } from 'react-router-dom'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Coin({ formattedCoins, onAddCoin, likedCoins }) {
  const [fullCoin, setFullCoin] = useState([])
  const [description, setDescription] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const param = useParams()
  const navigate = useNavigate()
  const currentCoin = formattedCoins.filter((item) => item.id === param.id)[0]
  const { id, rank, image, symbol, name, price, percentChange, high24h, low24h, marketCap } = currentCoin; 

  // console.log(currentCoin)

  useEffect(() => {
    const URL = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true`
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.description.en)
        setFullCoin(data)
      })

    const found = likedCoins.some(obj => obj.param === id)
    setIsLiked(found)
  }, [id, likedCoins])

  console.log(fullCoin)

  function handleAddCoin() {
    fetch('http://localhost:4000/coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, image, param: id, description })
    })
      .then((res) => res.json())
      .then((data) => onAddCoin(data))
      
    navigate('/')
  }

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item>
          <Img src={image} alt={name} />
        </Grid>
        <Grid item>
          <Typography>{symbol}</Typography>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="h3">{price}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography>Market Cap: {marketCap}</Typography>
          <Typography>Market Cap Rank: #{rank}</Typography>
          <Typography>24-hour High: {high24h}</Typography>
          <Typography>24-hour Low: {low24h}</Typography>
          <Typography>24-hour Change: {percentChange}</Typography>
        </Grid>
      </Grid>
      
      
      <button onClick={handleAddCoin} disabled={isLiked}>
        {isLiked ? `${name} is awesome` : "Add to Portfolio"}
      </button><button onClick={() => navigate('/coins')}>
        Display Crypto List
      </button>
    </Paper>
  )
}

export default Coin