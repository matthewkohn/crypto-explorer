import React, { useEffect, useState } from 'react'
import LikedCoin from './LikedCoin'

function Portfolio() {
  const [likedCoins, setLikedCoins] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/coins')
      .then((res) => res.json())
      .then((savedCoins) => setLikedCoins(savedCoins))
      .catch(console.log)
  }, [])
  
  console.log(likedCoins)


  return (
    <div>
      Portfolio!
      <LikedCoin />
      <LikedCoin />
      <LikedCoin />
    </div>
  )
}

export default Portfolio