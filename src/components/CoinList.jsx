import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { columns } from '../util/columns'

function CoinList({ formattedCoins, isLoaded }) {
  const gridColumns = columns()

  let navigate = useNavigate()

  const dataGridJsx = <DataGrid
    rows={formattedCoins}
    columns={gridColumns}
    hideFooter
    onRowClick={(params) => navigate(`/coins/${params.id}`)} />

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      {isLoaded ? dataGridJsx : <h2>Loading...</h2>}
    </div>
  )
}

export default CoinList
