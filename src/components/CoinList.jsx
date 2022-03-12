import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../functions/columns'

const CoinList = ({ coins, isLoaded }) => {

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      {isLoaded ? 
        <DataGrid
          rows={coins}
          columns={columns()}
          hideFooter
        />
        :
        <h2>Loading Cryptocurrencies...</h2>
      }
    </div>
  )
}

export default CoinList