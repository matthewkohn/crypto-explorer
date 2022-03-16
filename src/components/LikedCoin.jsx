import React from 'react'

function LikedCoin({ coin }) {

  return (
    <div>
      <h3>{coin.name}</h3>
      <img src={coin.image} alt={coin.name} />
    </div>
  )
}

export default LikedCoin