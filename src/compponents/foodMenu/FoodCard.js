import React from 'react'
import './FoodCard.css'
function FoodCard() {
  return (
    <div className='Card-container'>
      <div className="card">
        <img src="./images/about2.png.webp" alt="" />
        <div className="card-body">
            <h4>Food Name</h4>
            <p>Food description</p>
            <div className="card-footer">
                <h4>Price</h4>
                <button className="btn">Add to Cart</button>
            </div>
        </div>
      </div>

      <div className="card">
        <img src="./images/about2.png.webp" alt="" />
        <div className="card-body">
            <h4>Food Name</h4>
            <p>Food description</p>
            <div className="card-footer">
                <h4>Price</h4>
                <button className="btn">Add to Cart</button>
            </div>
        </div>
      </div>

      
    </div>
  )
}

export default FoodCard
