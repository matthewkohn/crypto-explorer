import { formatPrice } from "./formatPrice";

function formatCoin(coin) {
  return {
    id: coin.id,
    rank: coin.market_cap_rank,
    image: coin.image,
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    price: formatPrice(coin.current_price),
    percentChange: `${coin.price_change_percentage_24h.toFixed(2)}%`,
    sparkline: [...coin.sparkline_in_7d.price],
    high24h: formatPrice(coin.high_24h),
    low24h: formatPrice(coin.low_24h),
    marketCap: `$${(coin.market_cap / 1000000).toFixed(3)} million`
  };
}

export { formatCoin }