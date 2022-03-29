import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { columns } from '../util/columns'

function CoinList({ coinList, isLoaded }) {
  const gridColumns = columns()

  let navigate = useNavigate()

  const dataGridJsx = 
    <DataGrid
      rows={ coinList }
      columns={ gridColumns }
      hideFooter
      onRowClick={ (params) => navigate(`/coins/${params.id}`) } 
    />

  return (
    <ListContainer>
      { isLoaded ? dataGridJsx : <h2>Loading...</h2> }
    </ListContainer>
  )
}

export default CoinList

const ListContainer = styled(Box)({
  height: '75vh', 
  width: '100%',
})