export default function formatCoins(coins) {
  return coins.map((coin) => {
    return {
      id: coin.id,
      rank: coin.market_cap_rank,
      image: coin.image,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      price: coin.current_price.toLocaleString(undefined, { style: "currency", currency: "USD" }),
      change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
      sparkline: coin.sparkline_in_7d.price
    }
  });
}