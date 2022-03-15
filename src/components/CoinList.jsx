import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import columns from '../functions/columns';
import formatCoins from '../functions/formatCoinData';

const CoinList = ({ coins, isLoaded }) => {
console.log(formatCoins(coins))
  let navigate = useNavigate();

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      {isLoaded ? 
        <DataGrid
          rows={formatCoins(coins)}
          columns={columns()}
          hideFooter
          onRowClick={(params) => navigate(`/coins/${params.id}`)}
        />
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default CoinList
