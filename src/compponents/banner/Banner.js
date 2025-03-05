import React from 'react'
import '../banner/Banner.css'
import home from "../../data/home"
 

function Banner() {
  return (
    <>
      <section className='banner-content'>
      <main>
        <div class="text-container">
          <h1 class="main-heading">{home.heading}
          </h1>
          <h2 class="sub-heading">
           {home.heading2}
          </h2>
          <button class="reserve">Reservation</button>
        </div>
      </main>
      </section>
    </>
  )
}

export default Banner