import React from 'react'
// import { DataGrid } from '@mui/x-data-grid';

const CoinList = ({ coins, isLoaded }) => {
  console.log(`coins object inside CoinList: ${coins.map(coin => console.log(coin))}`)
  console.log(`isLoaded inside CoinList? ${isLoaded}`)

  return (
    <div>
      {/* <DataGrid /> */}
    </div>
  )
}

export default CoinList