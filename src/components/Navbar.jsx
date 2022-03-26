import { FormatListNumbered, StarOutline } from '@mui/icons-material';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ margin: "30px 0 60px" }}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Crypto Explorer
        </Typography>
        <IconButton
          size="large"
          onClick={() => navigate("/coins")}
        >
          <FormatListNumbered />
        </IconButton>
        <IconButton
          size="large"
          onClick={() => navigate("/")}
        >
          <StarOutline />
        </IconButton>
          {/* <Link to="/">Portfolio</Link>
          <Link to="/coins">Cryptocurrencies</Link> */}
          
      </Toolbar>
    </Box>
  );
}

export default Navbar