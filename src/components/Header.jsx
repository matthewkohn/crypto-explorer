import React from 'react'
import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import { FormatListNumbered, MailOutline, StarOutline } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <HeaderBox>
      <Toolbar>
        <Title variant='h3' component='div' >
          Crypto Explorer
        </Title>
        <IconButton
          size='large'
          onClick={() => navigate('/')}
        >
          <StarOutline />
        </IconButton>
        <IconButton
          size='large'
          onClick={() => navigate('/coins')}
        >
          <FormatListNumbered />
        </IconButton>
        <IconButton
          size='large'
          onClick={() => navigate('/contact')}
        >
          <MailOutline />
        </IconButton>
      </Toolbar>
    </HeaderBox>
  );
}

export default Header

const HeaderBox = styled(Box)({
  margin: '30px 0 60px',
})

const Title = styled(Typography)({
  flexGrow: 1,
})