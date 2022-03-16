import React from 'react'
import { useParams } from 'react-router-dom'

const Coin = ({ formattedCoins }) => {
  const param = useParams()
  console.log(param)

  const coin = formattedCoins.filter((item) => item.id === param.id)[0]

  return (
    <div>
      <p>Coin!</p>
      {console.log(coin)}
    </div>
  )
}

export default Coin