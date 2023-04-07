import React from 'react'
import "../css/Footer.css"
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer id='footer' className='pd-y f-wth'>
      <div className="container">
        <div className="footer-content text-center">
          <div className="row justify-content-between flex-wrap">
            <div className="col col-md-3 col-12">
              <div className='footer-logo'>
                  <Link to="/">
                    <img src="Assets/logo.svg" alt="bonik logo" />
                  </Link>
                  <p className='mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis saepe voluptas optio, repellendus itaque suscipit corrupti laboriosam! Reprehenderit debitis laborum ducimus nisi maiores.</p>
              </div>
            </div>
            {/* ./footer-logo */}
            <div className="col col-md-3 col-6">
              <div className="about-us">
                <h3>about us</h3>
                <ul className='mt-1'>
                  <li>careers</li>
                  <li>our stores</li>
                  <li>our cares</li>
                  <li>terms & conditions</li>
                  <li>privacy policy </li>
                </ul>
              </div>
            </div>
            {/* ./about-us */}
            <div className="col col-md-3 col-6">
              <div className="customer-care">
                <h3>customer care</h3>
                <ul className='mt-1'>
                  <li>help center</li>
                  <li>how to buy</li>
                  <li>track your order</li>
                  <li>corporate & bulk purchasing</li>
                  <li>returns & refunds </li>
                </ul>
              </div>
            </div>
            {/* ./customer-care */}
            <div className="col col-md-3 col-6">
              <div className="contact-us">
                <h3>contact us</h3>
                <p className='mt-1'>70 washington square south, new yourk, NY 10012, united state</p>
                <ul className='mt-1'>
                  <li>e-mail: ulib.help@gmail.com</li>
                  <li>phone: +1 1123 456 780</li>
                </ul>
              </div>
            </div>
            {/* ./contact-us */}
          </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer