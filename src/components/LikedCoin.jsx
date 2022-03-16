import React from 'react'

function LikedCoin({ coin, onDelete }) {

  const handleDelete = () => {
    fetch(`http://localhost:4000/coins/${coin.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(onDelete(coin.id))
  }
  return (
    <div>
      <h3>{coin.name}</h3>
      <img src={coin.image} alt={coin.name} />
      <button onClick={handleDelete} >Delete</button>
    </div>
  )
}

export default LikedCoin