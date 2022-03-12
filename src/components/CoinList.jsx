import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { columns } from '../functions/columns'
import { useNavigate } from 'react-router-dom'

const CoinList = ({ coins, isLoaded }) => {

  let navigate = useNavigate()

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      {isLoaded ? 
        <DataGrid
          rows={coins}
          columns={columns()}
          hideFooter
          onRowClick={(params) => navigate(`/coins/${params.id}`)}
        />
        :
        <h2>Loading Cryptocurrencies...</h2>
      }
    </div>
  )
}

export default CoinList