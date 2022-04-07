import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const ErrorCard = () => {
  const navigate = useNavigate()

  return (
    <Error 
      color='error'
      size='large'
      onClick={ () => navigate('/coins') }
      variant='contained' 
    >
      404 Page Not Found. Go back to your reading list.
    </Error>
  )
}

export default ErrorCard

const Error = styled(Button)({
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center',
  alignContent: 'center',
  margin: '20vh auto', 
  padding: '30px', 
})