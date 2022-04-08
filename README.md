# Crypto-Explorer
A single-page React application that allows the user to explore and learn about top cryptocurrencies.

## Description
Crypto Explorer is a single-page CRUD application that allows the user to view current market data for the top-100 cryptocurrencies, according to the [CoinGecko API](https://www.coingecko.com/en/api/documentation).

This app was created as a final project for Flatiron Schools Software Engineering course, Phase-2.

## Table of Contents
* [Technologies Used](#tech)
* [Components](#components)
* [Functionality](#func)
* [Visuals](#visual)
* [Roadmap](#roadmap)
* [License](#license)

### _Technologies Used_<a id="tech"></a>
* [React v16](https://reactjs.org/)
* [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/installation)
* [Material UI v5](https://mui.com/getting-started/installation/)
* [Styled Components](https://styled-components.com/docs)
* [json-server](https://github.com/typicode/json-server)
* [html-react-parser](https://www.npmjs.com/package/html-react-parser)
* [EmailJS](https://www.emailjs.com/)

### _Components_<a id="components"></a>
The React app is rendered in `index.js`, where the `<App>` component is wrapped in React Router's `<BrowserRouter>`, giving React Router access to every component. `<App>` is also wrapped in two context providers, `<CoinProvider>` and `<LikedCoinProvider>`. 

[See below](#func) for information on Context.

1. `<App>` is the parent component, an MUI container displaying the `<Header>` at the top, followed by a component for one of the following `Routes`:
    * `<ReadingList>` routed to path `'/'` 
    * `<CoinList>` routed to path `'/coins'`
    * `<Coin>` routed to path `'/coins/:id'`
    * `<ContactUs>` routed to path `'/contact'` 
    * `<ErrorCard>` for broken routes, `'*'`

2. `<Header>` is the title banner of the page, with icons that navigate onClick to the ReadingList, CoinList, and ContactUs components, respectively.

3. `<ReadingList>` lives at the home page, `'/'`, and acts as a "Bookmark" page for the user's selected cryptos. This component accesses `likedCoinContext`, mapping every object from context to a new `<LikedCoin>` component that is listed in ReadingList.

4. `<LikedCoin>` is an MUI Accordion component that displays:
    * An MUI [`<Avatar>`](https://mui.com/components/avatars/#main-content) that displays the coin's image, navigating the user to a `<Coin>` component for the selected coin.
    * The cryptocurrency's Name
    * A Delete button that removes the coin from the page by updating state, and removes the coin's data from the backend database.
    * When expanded, each LikedCoin displays a detailed description of the selected cryptocurrency. This description is fetched from CoinGecko.com on render. 

3. `<CoinList>` is an MUI [`<DataGrid>`](https://mui.com/components/data-grid/). DataGrid has `rows` and `columns` props that each expect an array of objects. We pass in `coinList` from `coinContext` for each row, and `"/util/columns.jsx"` for each column. When a column object's `field` matches a key in each row, that row key's value is rendered in the DataGrid cell.

6. `<Coin>` displays props from coinList context for a selected coin, as well as a Call-to-Action button that adds the crypto to the ReadingList using fetch POST. 

7. `<ContactUs>` is a controlled email comment form that is sent to me when the user clicks "Send", using [EmailJS](https://www.emailjs.com/).

8. `<ErrorCard>` is an MUI Button that directs the user to the home page if they end up in a broken route.

## _Functionality Summary_<a id="func"></a>
Two pieces of context represent data that is presented in this app.

`CoinContext` fetches market data for the top 100 cryptocurrencies from [CoinGecko.com](https://www.coingecko.com/en/api/documentation) in the useEffect hook. That data is formatted with `formatCoinData.jsx` and set in a `coinList` state variable. State for `isLoaded` is also updated on a successful fetch request. Both `coinList` and `isLoaded` is passed in an array as the `CoinContext.Provider`'s value.

`LikedCoinContext` fetches the user's "liked coins" from our database, and saves in state. Each "liked coin" is rendered as a `<LikedCoin>` component in the `<ReadingList>`. State is also passed to `<Coin>` to check for duplicate POST requests.

### Components using React Hooks
[useState](https://reactjs.org/docs/hooks-state.html): `<Coin>`, `<LikedCoin>`, and `<ContactUs>`

[useEffect](https://reactjs.org/docs/hooks-effect.html): `<Coin>` & `<LikedCoin>`

[useContext](https://reactjs.org/docs/context.html): `<Coin>`, `<CoinList>`, and `<ReadingList>`

[useRef](https://reactjs.org/docs/hooks-reference.html#useref): `<ContactUs>`

### Fetch Requests 
Urls for every request are stored in `"/util/urls.js"`.

GET: `<LikedCoin>` component for the description

GET: `CoinContext` for market data

GET: `LikedCoinContext` for saved coins in the database

POST: `<Coin>` component for adding a coin to likedCoins

DELETE: `<ReadingList>` component to update a deleted `<LikedCoin>`


## Visuals<a id="visual"></a>
A video walkthrough for this app can be found [here](https://youtu.be/8sb3mBpuc5M).

#### Component Hierarchy Flowchart:
![Component hierarchy flowchart](/media/hierarchy.drawio.svg)


## Roadmap<a id="roadmap"></a>
The behavior of the app is similar to a transactional cryptocurrency exchange app. Future features may include:
* Adding input fields in the Coin component that allow you to buy/sell a coin with a virtual "wallet"
* Sorting of LikedCoins in the ReadingList component
* Expanding DataGrid in the CoinList component to include additional columns
* Adding Sparklines to visualize market data
* Expanding the amount of market data shown (i.e. display volumes, trends, or social media stats)
* Connecting each cryptocurrency to CoinGecko.com's site for that coin

The possibilities are as endless as our imagination.

## Contributing
I am not accepting contributions at this time, as this is a project for school I am submitting.

## License<a id="license"></a>
[Read the license here](./LICENSE)
