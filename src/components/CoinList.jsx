import React, { useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import { CoinContext } from '../context/coinContext'
import { columns } from '../util/columns'

function CoinList() {
  const gridColumns = columns()
  const [coinList, isLoaded] = useContext(CoinContext)

  let navigate = useNavigate()

  const dataGridJsx = 
    <DataGrid
      rows={ coinList }
      columns={ gridColumns }
      hideFooter
      onRowClick={ (coin) => navigate(`/coins/${coin.id}`) } 
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