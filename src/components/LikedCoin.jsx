import React from 'react'
import { Grid } from '@mui/material';
import { Card, Avatar, CardHeader, IconButton } from '@mui/material';
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
      <Grid item xs={12} md={12} lg={12}>  
        <Card  >
          <CardHeader
            avatar={ <Avatar src={coin.image} alt={coin.name}/> }
            action={
              <IconButton onClick={() => handleDelete(coin.id)}>
                <DeleteOutlined />  
              </IconButton>
            }
            title={coin.name}
            />
          
        </Card>
      </Grid>
    </div>
  )
}

export default LikedCoin