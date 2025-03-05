import React from 'react'
import '../footer_comp/FooterComp.css'
function FooterComp() {
  return (
    <>
        <div className="footer_grid">
            <div className="f-col1">
                <img src="./images/brand_logo.jpg" alt="" />
            </div>
            <div className="f-col2">
                <ul>
                    <li><h1>Navigation</h1></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
            <div className="f-col3">
                <ul>
                    <li><h1>Useful Links</h1></li>
                    <li><a href="#">Registration</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Terms&conditions</a></li>
                </ul>
            </div>
            <div className="f-col4">
                <h1>Instagram Feed</h1>
                <div className='card_grid'>
                    <div className="col1">
                        <img src="./images/about2.png.webp" alt="" />
                        <img src="./images/about2.png.webp" alt="" />
                    </div>
                    <div className="col2">
                    <img src="./images/about2.png.webp" alt="" />
                    <img src="./images/about2.png.webp" alt="" />
                    </div>
                    <div className="col3">
                    <img src="./images/about2.png.webp" alt="" />
                    <img src="./images/about2.png.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterComp
