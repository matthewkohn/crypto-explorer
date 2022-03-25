import React from 'react'
import { Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DeleteOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'

function LikedCoin({ coin, onDelete }) {

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const URL = "http://localhost:4000/coins/"
    fetch(URL + id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(onDelete(coin.id))
      .catch(console.log('There was a slight problem deleting this item.'))
  }
  
  return (
    <Accordion elevation={5} sx={{ margin: '8px'}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Avatar 
          src={coin.image} 
          alt={coin.name} 
          onClick={() => navigate(`/coins/${coin.param}`)}
        />
        <Typography 
          sx={{ width: '70%', paddingLeft: '30px' }} 
          variant="h6" 
        >
          {coin.name}
        </Typography>
        <IconButton onClick={() => handleDelete(coin.id)} >
          <DeleteOutlined />  
        </IconButton>        
      </AccordionSummary>
      <AccordionDetails >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default LikedCoin