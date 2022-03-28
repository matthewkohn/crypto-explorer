function getCoinGeckoUrl() {
  return 'https://api.coingecko.com/api/v3/coins'
}

function getMarketsUrl() {
  const coinGeckoBase = getCoinGeckoUrl()
  return coinGeckoBase + '/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=false'
}

function getDatabaseUrl() {
  return 'http://localhost:4000/coins'
}

export { getCoinGeckoUrl, getMarketsUrl, getDatabaseUrl }