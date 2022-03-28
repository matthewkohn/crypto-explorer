import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DeleteOutlined } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'

function LikedCoin({ coin, handleDelete }) {

  const navigate = useNavigate()

  return (
    <ChosenCoin elevation={5} >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Avatar 
          src={coin.image} 
          alt={coin.name} 
          onClick={() => navigate(`/coins/${coin.param}`)}
        />
        <CoinName variant='h6' >
          {coin.name}
        </CoinName>
        <IconButton onClick={() => handleDelete(coin.id)} >
          <DeleteOutlined />  
        </IconButton>        
      </AccordionSummary>
      <AccordionDetails >
        <Description>
          {parse(coin.description)}
        </Description>
      </AccordionDetails>
    </ChosenCoin>
  )
}

export default LikedCoin

const ChosenCoin = styled(Accordion)({
  margin: '8px',
})

const CoinName = styled(Typography)({
  width: '70%', 
  paddingLeft: '50px',
})

const Description = styled(Typography)({
  margin: 'auto', 
  width: '70%', 
  maxHeight: '200px', 
  overflowY: 'scroll',
})