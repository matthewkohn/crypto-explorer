import React from 'react'

const CoinList = ({ coins, isLoaded }) => {
  console.log(`coins object inside CoinList: ${coins.map(coin => console.log(coin))}`)
  console.log(`isLoaded inside CoinList? ${isLoaded}`)

  return (
    <div>CoinList!</div>
  )
}

export default CoinList