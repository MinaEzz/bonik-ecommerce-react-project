import React from 'react'
import "../css/Home.css"
// data
import categories from "../data/categories.json"
import slider from "../data/slider.json"
// bootstrap
import { Carousel } from 'react-bootstrap'
// components 
import FlashDeals from "./FlashDeals";
import TopCategory from './TopCategory'
import Arrivals from './Arrivals'


function Home() {

    // aside categories mapping 
    const categoryItem = categories.map((category)=>{
        return( 
        <div className="category-item" key={category.catId} >
            <img className='catImg' src={category.catImage} alt="category item" title={category.catName} />
            <span className='catName'>{category.catName}</span>
        </div>
        )
    })
    // carousel mapping
    const carouselItem = slider.map((slide)=>{
        return (
            <Carousel.Item hidden={true} key={slide.id}>
            <Carousel.Caption>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                <button className='btn'>visit collection</button>
            </Carousel.Caption>
            <div className="carousel-img">
                <img src={slide.img} alt="slide"/>
            </div>
            </Carousel.Item>
        )
    })
    
  return (
    <>
    <section id='home' className='pd-y f-wth'>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col col-md-3 col-2">
                    <aside>
                        {categoryItem}
                    </aside>
                </div>
                <div className="col col-md-9 col-10">
                    <div className="carousel">
                        <Carousel controls={false} indicators={false} interval={4000}>
                            {carouselItem}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FlashDeals />
    <TopCategory />
    <Arrivals />
    </>
  )
}

export default Home