import React from 'react'
import LikedCoin from './LikedCoin'

function Portfolio({ likedCoins }) {
  
  const likedCoinList = likedCoins.map((coin) => <LikedCoin key={coin.id} coin={coin} /> )

  return (
    <div>
      <h2>Your Portfolio</h2>
      {likedCoinList}
    </div>
  )
}

export default Portfolio