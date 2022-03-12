

const columns = () => {
  return [
    { field: 'rank', 
      headerName: 'Rank', 
      width: 80, 
      sortable: true,
      description: 'Rank by Market Cap Size',
    },
    {
      field: 'imageUrl',
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
    
  ];
}

export { columns }