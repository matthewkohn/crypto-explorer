import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DeleteOutlined } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'

function LikedCoin({ coin, handleDelete }) {

  const navigate = useNavigate()
  const { coinId, description, id, image, name } = coin

  return (
    <ChosenCoin elevation={5} >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Avatar 
          src={ image } 
          alt={ name } 
          onClick={() => navigate(`/coins/${ coinId }`)}
        />
        <CoinName variant='h6' >
          { name }
        </CoinName>
        <IconButton onClick={() => handleDelete( id )} >
          <DeleteOutlined />  
        </IconButton>        
      </AccordionSummary>
      <AccordionDetails >
        <Description>
          { parse( description ) }
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