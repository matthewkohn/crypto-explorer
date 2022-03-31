const coinGeckoUrl = 'https://api.coingecko.com/api/v3/coins'

const marketsUrl = coinGeckoUrl + '/markets?vs_currency=usd&order=market_cap_rank&per_page500&page=1&sparkline=false'

const databaseUrl = 'http://localhost:4000/coins'

export { coinGeckoUrl, marketsUrl, databaseUrl }