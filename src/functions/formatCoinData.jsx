
const formatPrice = (price) => {
  return price.toLocaleString(undefined, { style: "currency", currency: "USD" })
}

const formatCoinData = (coins) => {
  return coins.map((coin) => {
    return {
      name: coin.name,
      id: coin.id,
      imageUrl: coin.image,
      symbol: coin.symbol.toUpperCase(),
      price: formatPrice(coin.current_price),
      rank: coin.market_cap_rank,
      high: formatPrice(coin.high_24h),
      low: formatPrice(coin.low_24h),
      changePercent: (coin.price_change_percentage_24h / 100).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 2 }),
      marketCap: `$${(coin.market_cap / 1000000).toFixed(3)} million`,
      sparkline: coin.sparkline_in_7d.price
    }
  })
}

export { formatCoinData }