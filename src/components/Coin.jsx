import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Sparklines, SparklinesLine } from "react-sparklines"

function Coin({ formattedCoins }) {
  const param = useParams()
  const navigate = useNavigate()
  
  const currentCoin = formattedCoins.filter((item) => item.id === param.id)[0]
  const { rank, image, symbol, name, price, percentChange, sparkline, high24h, low24h, marketCap } = currentCoin;
  
  const chartStyles = {
    background: "#00bdcc", 
    height: "80px", 
    width: "300px", 
    borderRadius: 5, 
    padding: 2
  }

  function addCoin() {
    fetch('http://localhost:4000/coins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, image })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

    navigate('/')
  }

  return (
    <div>
      <div style={{display: 'flex', padding: 40}}>
        <img src={image} alt={name} style={{ width: 180, height: 180, marginRight: 80 }}/>
        <div >
          <p>{symbol}</p>
          <h2>{name}</h2>
          <h3>{price}</h3>
          <Sparklines data={sparkline} style={chartStyles} margin={1} >
            <SparklinesLine style={{ stroke: "white", fill: "none" }} />
         </Sparklines>
        </div>
      </div>
      <ul style={{ textAlign: 'center', listStyle: 'none', lineHeight: 1.7}}>
        <li>Market Cap: {marketCap}</li>
        <li>Market Cap Rank: #{rank}</li>
        <li>24-hour High: {high24h}</li>
        <li>24-hour Low: {low24h}</li>
        <li>24-hour Change: {percentChange}</li>
      </ul>
      <button onClick={addCoin} >Add to Portfolio</button>
    </div>
  )
}

export default Coin