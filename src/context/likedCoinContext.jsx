import React, { createContext, useEffect, useState } from 'react'
import { databaseUrl } from '../util/urls'

const LikedCoinContext = createContext()

function LikedCoinProvider({ children }) {
  const [likedCoins, setLikedCoins] = useState([])

  const value = [likedCoins, setLikedCoins]

  useEffect(() => {
    fetch(databaseUrl)
      .then((res) => res.json())
      .then((savedCoins) => setLikedCoins(savedCoins))
      .catch(console.log)
  }, [])

  return (
    <LikedCoinContext.Provider value={ value } >
      { children }
    </LikedCoinContext.Provider>
  )
}

export { LikedCoinContext, LikedCoinProvider }