# Crypto-Explorer
A single-page React application that allows the user to explore and learn about top cryptocurrencies.

## Description
Crypto Explorer is a single-page CRUD application that allows the user to view up-to-date data for top-100 cryptocurrencies, according to the [CoinGecko API](https://www.coingecko.com/en/api/documentation).

This app was created as a final project for Flatiron Schools Software Engineering course, Phase-2.

### _Technologies Used_
* [React v16]()
* [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/installation)
* [Material UI v5](https://mui.com/getting-started/installation/)
* [json-server](https://github.com/typicode/json-server)
* [html-react-parser](https://www.npmjs.com/package/html-react-parser)

### _Components_
The React app is rendered in `index.js`, where the `<App>` component is wrapped in React Router's `<BrowserRouter>`, giving React Router access to every component.

`<App>` is the parent component, handling `Routes` for the `<Portfolio>`, `<CoinList>`, and `<Coin>` components, as well as fetching data from [CoinGecko.com](https://www.coingecko.com/en/api/documentation) and our backend, and distributing that data to its children as props.
* `coinList` is a state variable that is set when CoinGecko's data is formatted with `"/util/formatCoinData.jsx"`, and is used for each row in the `<CoinList>` component.
* `likedCoins` is a state variable that is set with any backend data that may have been saved, and is used for each `<LikedCoin>` component that is displayed in `<Portfolio>`.

`<Header>` is the title banner of the page, with icons that navigate to the Portfolio and CoinList components, respectively.

`<CoinList>` is an MUI [`<DataGrid>`](https://mui.com/components/data-grid/). DataGrid has `rows` and `columns` props that each expect an array of objects. Here we pass in `coinList` for each row, and `"/util/columns.jsx"` for each column. When a column object's `field` matches a key in each row, that row key's value is rendered in the DataGrid cell.

CoinList's route is `'/coins'`.

`<Portfolio>` lives at the home page, `'/'`, and handles delete functionality for the `<LikedCoin>` components rendered. Portfolio acts as a "Bookmark" page for the user's selected cryptos.

`<LikedCoin>` is an MUI Accordion component that displays 3 things:
* An MUI [`<Avatar>`](https://mui.com/components/avatars/#main-content) that displays the coin's image, navigating the user to a `<Coin>` component for the selected coin.
* The cryptocurrency's Name
* A Delete button that removes the coin from the page by updating state, and removes the coin's data from the backend database.
* When expanded, each LikedCoin displays a detailed description of the selected cryptocurrency. This description is fetched, stored, and POSTed in the Coin component, and retrieved when the LikedCoin component renders.

`<Coin>`'s route is located at `/coins/:id`, and displays props from coinList for that coin, as well as a Call-to-Action button that adds that crypto to our Portfolio using fetch POST. Coin also fetches the selected coin's description, which is sent to the server as a string when the user clicks the CTA.

### _Functionality Summary_
The Coin component and the App component are the only two components that utilize the [useState](https://reactjs.org/docs/hooks-state.html) and [useEffect](https://reactjs.org/docs/hooks-effect.html) hooks.

Fetch GET requests are made twice in the App component, and once in the Coin component. 

POST request is handled in the Coin component, and state is updated up in the App component for `likedCoins`.

DELETE request is handled in the Portfolio component, passed up from the LikedCoin component event listener.

Urls for every request are stored in `"/util/urls.js"`.

## Visuals
#### Component Hierarchy Flowchart:
![Component hierarchy flowchart](/media/hierarchy.drawio.svg)


## Roadmap
The behavior of the app is similar to a transactional cryptocurrency exchange app. Future features may include:
* Adding input fields in the Coin component that allow you to buy/sell a coin with a virtual "wallet"
* Sorting of LikedCoins in the Portfolio component
* Expanding DataGrid in the CoinList component to include additional columns
* Adding Sparklines to visualize market data
* Expanding the amount of market data shown (i.e. display volumes, trends, or social media stats)
* Connecting each cryptocurrency to CoinGecko.com's site for that coin

The possibilities are as endless as our imagination.

## Contributing
I am not accepting contributions at this time, as this is a project for school I am submitting.

## License
[Read the license here](./LICENSE)
