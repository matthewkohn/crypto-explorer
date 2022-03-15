import React from 'react'
import { Sparklines, SparklinesLine } from "react-sparklines";

const chartStyles = {
  background: "#00bdcc", 
  height: "80%", 
  width: "100%", 
  borderRadius: 5, 
  padding: 2
}

export default function columns() {
  return [
    { field: 'rank', 
      headerName: 'Rank', 
      width: 80, 
      sortable: true,
      description: 'Rank by Market Cap Size',
    },
    {
      field: 'image',
      headerName: 'Logo',
      renderCell: (params) => (
        <>
          <img
            src={params.formattedValue}
            alt={params.id}
            style={{width: 40}}
            />
        </>
      ),
      width: 80,
      sortable: false,
    },
    {
      field: 'symbol',
      headerName: 'Symbol',
      width: 120,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 210,
      renderCell: (params) => (
        <h3>{params.formattedValue}</h3>
      ),
    },
    {
      field: 'price',
      headerName: 'Current Value',
      sortable: true,
      type: 'number',
      width: 120,
      renderCell: (params) => (
        <h3>{params.formattedValue}</h3>
      ),
    },
    {
      field: 'change',
      headerName: '24hr Change',
      sortable: true,
      type: 'number',
      width: 120,
    },
    {
      field: 'sparkline',
      headerName: 'Past 7 days',
      headerAlign: 'center',
      renderCell: (params) => (
        <>
          {/* {console.log(params)} */}
          <Sparklines data={params.formattedValue} style={chartStyles} margin={1}  >
            <SparklinesLine style={{ stroke: "white", fill: "none" }} />
          </Sparklines>
        </>
      ),
      sortable: false,
      type: 'number',
      width: 280,
    },
  ];
}