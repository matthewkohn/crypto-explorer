import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DeleteOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser';

function LikedCoin({ coin, handleDelete }) {

  const navigate = useNavigate();

  return (
    <Accordion elevation={5} sx={{ margin: '8px'}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Avatar 
          src={coin.image} 
          alt={coin.name} 
          onClick={() => navigate(`/coins/${coin.param}`)}
        />
        <Typography sx={{ width: '70%', paddingLeft: '30px' }} variant="h6" >
          {coin.name}
        </Typography>
        <IconButton onClick={() => handleDelete(coin.id)} >
          <DeleteOutlined />  
        </IconButton>        
      </AccordionSummary>
      <AccordionDetails >
        <Typography sx={{ margin: "20px", maxHeight: "150px", overflowY: "scroll"}}>
          {parse(coin.description)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default LikedCoin