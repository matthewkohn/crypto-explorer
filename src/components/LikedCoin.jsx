import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Card, Avatar, CardHeader, IconButton } from '@mui/material';
// import { DeleteOutlined, InfoIcon } from '@mui/icons-material';
import { DeleteOutlined } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom'

function LikedCoin({ coin, onDelete }) {

  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch("http://localhost:4000/coins/" + id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(onDelete(coin.id))
  }

  console.log(coin)
  return (
    <div onClick={() => navigate(`/coins/${coin.param}`)} >
      <Grid item xs={12} md={12} lg={12} >  
        <Card sx={{ margin: '20px', width: '80vw'}}>
          <CardHeader
            avatar={ <Avatar src={coin.image} alt={coin.name}/> }
            action={
              // <>
              //   <IconButton onClick={() => handleDelete(coin.id)}>
              //     <InfoIcon />  
              //   </IconButton>
                <IconButton onClick={() => handleDelete(coin.id)}>
                  <DeleteOutlined />  
                </IconButton>
              // </>
            }
            title={<Typography variant="h6">{coin.name}</Typography>}
            />
          
        </Card>
      </Grid>
    </div>
  )
}

export default LikedCoin