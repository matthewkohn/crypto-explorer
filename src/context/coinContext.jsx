import React, { createContext, useEffect, useState } from 'react'
import { formatCoin } from '../util/formatCoinData'
import { marketsUrl } from '../util/urls'

const CoinContext = createContext()

function CoinProvider({ children }) {
  const [coinList, setCoinList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const value = [coinList, isLoaded]

  useEffect(() => {
    fetch(marketsUrl)
      .then((res) => res.json())
      .then((coins) => {
        const formattedCoins = coins.map((coin) => formatCoin(coin))
        setCoinList(formattedCoins)
      })
      .then(setIsLoaded(true))
      .catch(console.log)
    }, [])

  return (
    <CoinContext.Provider value={ value } >
      { children }
    </CoinContext.Provider>
  )
}

export { CoinContext, CoinProvider }