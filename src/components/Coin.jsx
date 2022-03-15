import React from 'react'
import { useParams } from 'react-router-dom'
import { formatCoin } from '../functions/formatCoinData'

const Coin = ({ coins }) => {
  const param = useParams()
  console.log(param)

  const coin = coins.filter((item) => item.id === param.id)[0]
  console.log(formatCoin(coin));

  return (
    <div>Coin!</div>
  )
}

export default Coin