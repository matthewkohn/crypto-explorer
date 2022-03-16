import React from 'react'
import { useParams } from 'react-router-dom'

const Coin = ({ formattedCoins }) => {
  const param = useParams()
  console.log(param)

  const coin = formattedCoins.filter((item) => item.id === param.id)[0]

  return (
    <div>
      <p>Coin!</p>
      {console.log(coin)}
    </div>
  )
}

export default Coin




// import { Sparklines, SparklinesLine } from "react-sparklines";

// const chartStyles = {
//   background: "#00bdcc", 
//   height: "80%", 
//   width: "100%", 
//   borderRadius: 5, 
//   padding: 2
// }
{/* <Sparklines data={params.value} style={chartStyles} margin={1}  >
    //         <SparklinesLine style={{ stroke: "white", fill: "none" }} />
    //       </Sparklines> */}