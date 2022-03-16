import React from 'react'
import LikedCoin from './LikedCoin'

function Portfolio({ likedCoins, updateCoins }) {
  
  const deleteCoin = (id) => {
    const newCoins = likedCoins.filter((coin) => coin.id !== id)
    updateCoins(newCoins)
  }

  const likedCoinList = likedCoins.map((coin) => <LikedCoin key={coin.id} coin={coin} onDelete={deleteCoin} /> )

  return (
    <div>
      <h2>Your Portfolio</h2>
      {likedCoinList}
    </div>
  )
}

export default Portfolio