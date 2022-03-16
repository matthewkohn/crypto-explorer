import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { columns } from '../functions/columns'
// import formatCoins from '../functions/formatCoinData'
import { formatCoin } from '../functions/formatCoinData'

const CoinList = ({ coins, isLoaded }) => {
  const [formattedRows, setFormattedRows] = useState([])
  const [loadedColumns, setLoadedColumns] = useState([])

  useEffect(() => {
    const rows = coins.map((coin) => formatCoin(coin))
    setFormattedRows(rows)

    const cols = columns()
    console.log(cols)
    setLoadedColumns(cols)
  }, [coins])

  let navigate = useNavigate();

  const dataGridJsx = <DataGrid
                      rows={formattedRows}
                      columns={loadedColumns}
                      hideFooter
                      onRowClick={(params) => navigate(`/coins/${params.id}`)}
                    />

  // const formattedRows = coins.map((coin) => formatCoin(coin))
  // const loadedColumns = columns();
  // console.log(formattedRows)

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      { isLoaded ?  dataGridJsx : <h2>Loading...</h2> }
    </div>
  )
}

export default CoinList
