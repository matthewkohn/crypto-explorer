// function formatCoins(coins) {
//   return coins.map((coin) => {
//     return {
//       id: coin.id,
//       rank: coin.market_cap_rank,
//       image: coin.image,
//       symbol: coin.symbol.toUpperCase(),
//       name: coin.name,
//       price: coin.current_price.toLocaleString(undefined, { style: "currency", currency: "USD" }),
//       change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
//       sparkline: coin.sparkline_in_7d.price
//     }
//   });
// }

const formatPrice = (price) => {
  return price.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

const formatCoin = (coin) => {
  // console.log(coin)
  return {
    id: coin.id,
    rank: coin.market_cap_rank,
    image: coin.image,
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    price: formatPrice(coin.current_price),
    percentChange: `${coin.price_change_percentage_24h.toFixed(2)}%`,
    sparkline: [...coin.sparkline_in_7d.price],
    high: formatPrice(coin.high_24h),
    low: formatPrice(coin.low_24h),
    marketCap: `$${(coin.market_cap / 1000000).toFixed(3)} million`
  }
}


export { formatCoin }