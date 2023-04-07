import React from 'react'
import "../css/Banner.css"

function Banner() {
  return (
    <section id='banner' className='pd-y f-wth'>
        <div className="container">
            <div className="banner-content">
                <div className="row justify-content-between align-items-center">
                    <div className="col col-4">
                        <div className="banner-img">
                        <img src="Assets/images/banner-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col col-8">
                        <div className="banner-img">
                        <img src="Assets/images/banner-2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner