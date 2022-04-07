import React, { useContext, useEffect, useState } from 'react'
import { Paper, Grid, Typography, Button } from '@mui/material'
import { StarOutline } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useNavigate, useParams } from 'react-router-dom'
import { CoinContext } from '../context/coinContext'
import { coinGeckoUrl, databaseUrl } from '../util/urls';

function Coin({ addCoin, likedCoins }) {
  const [description, setDescription] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  
  const [coinList] = useContext(CoinContext)
  const param = useParams()
  const currentCoin = coinList.filter((item) => item.id === param.id)[0]
  const { id, rank, image, symbol, name, price, percentChange, high24h, low24h, marketCap } = currentCoin; 

  const navigate = useNavigate()


  useEffect(() => {
    const descriptionUrl = coinGeckoUrl + '/' + id
    fetch(descriptionUrl)
      .then((res) => res.json())
      .then((data) => setDescription(data.description.en))
      .catch(console.log)
    // Check for duplication when CTA is clicked
    const found = likedCoins.some(coin => coin.param === id)
    setIsLiked(found)
  }, [id, likedCoins])

  function handleAddCoin() {
    const jsonObj = { name, image, param: id, description }
    fetch(databaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonObj)
    })
      .then((res) => res.json())
      .then((data) => addCoin(data))
      .then(navigate('/'))
      .catch(console.log)
  }

  return (
    <GridPaper elevation={10} >
      <GridBlock container spacing={8} >
        <Grid item xs={6}>
          <Img src={ image } alt={ name } />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h2'>{ name }</Typography>
          <Typography variant='h3'>{ price }</Typography>
        </Grid>
      </GridBlock>

      <CallToAction 
        variant='outlined' 
        size='large' 
        onClick={ isLiked ? () => navigate('/') : handleAddCoin }
      >
        <StarOutline />
        { isLiked ? 
          `${ name } is awesome. Keep learning.` 
          : 
          `Add ${ name } to your reading list` 
        }
        <StarOutline />
      </CallToAction>

      <GridBlock container spacing={12} >
        <Grid item xs={12} sm={6}>       
          <Typography variant='h6' gutterBottom >
            In the last 24 hours:
          </Typography>
          <Typography>High: { high24h }</Typography>
          <Typography>Low: { low24h }</Typography>
          <Typography 
            gutterBottom 
            sx={ percentChange > 0 ? {color:'green'} : {color:'red'} }
          >
            Change: { percentChange }
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom >
            Fun facts:
          </Typography>
          <Typography>Symbol: { symbol }</Typography>
          <Typography>Market Cap Rank: #{ rank }</Typography>
          <Typography>Market Cap: { marketCap }</Typography>
        </Grid>
      </GridBlock>
    </GridPaper>
  )
}

export default Coin

const Img = styled('img')({
  margin: 'auto',
  padding: '0 20px',
  display: 'block',
  maxWidth: '80%',
  maxHeight: '80%',
});

const CallToAction = styled(Button)({
  margin: '10px 0 0', 
  padding: '10px 0', 
  display: 'flex', 
  justifyContent: 'space-between',
})

const GridPaper = styled(Paper)({
  display: 'flex', 
  flexDirection: 'column',
})

const GridBlock = styled(Grid)({
  padding: '30px',
})