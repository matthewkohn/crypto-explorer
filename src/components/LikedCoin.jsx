import React, { useEffect, useState } from 'react'
import { Card, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DeleteOutlined } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'
import { coinGeckoUrl } from '../util/urls';

function LikedCoin({ coin, onDelete }) {
  const [description, setDescription] = useState('')
  const parsedDescription = parse(description)
  const { image, name, param, id } = coin
  
  const navigate = useNavigate()
  
  useEffect(() => {
    const descriptionUrl = coinGeckoUrl + '/' + param
    fetch(descriptionUrl)
      .then((res) => res.json())
      .then((data) => setDescription(data.description.en))
      .catch(console.log)
  }, [param])

  return (
    <RowCard>
      <ChosenCoin elevation={2} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Avatar 
            src={ image } 
            alt={ name } 
            onClick={() => navigate(`/coins/${ param }`)}
          />
          <CoinName variant='h6' >
            { name }
          </CoinName>
        </AccordionSummary>
        <AccordionDetails >
          <Description>
            { parsedDescription }
          </Description>
        </AccordionDetails>
      </ChosenCoin>
      <IconButton onClick={() => onDelete(id)} >
        <DeleteOutlined />  
      </IconButton>  
    </RowCard>      
  )
}

export default LikedCoin

const RowCard = styled(Card)({
  display: 'flex', 
  flexDirection: 'row',
})

const ChosenCoin = styled(Accordion)({
  margin: '8px',
  width: '100%',
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