import React from 'react'
import { useNavigate } from 'react-router-dom'

function LikedCoin({ coin, onDelete }) {

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:4000/coins/${coin.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(onDelete(coin.id))
  }

  console.log(coin)
  return (
    <div onClick={() => navigate(`/coins/${coin.param}`)} >
      <h3>{coin.name}</h3>
      <img src={coin.image} alt={coin.name} />
      <button onClick={handleDelete} >Delete</button>
    </div>
  )
}

export default LikedCoin