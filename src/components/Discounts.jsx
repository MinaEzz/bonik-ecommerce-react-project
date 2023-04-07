import React from 'react'
import "../css/Discounts.css"
// mui icons
import DiscountIcon from '@mui/icons-material/Discount';
import { Link } from 'react-router-dom';
// react multi carousel
import Carousel from 'react-multi-carousel';
// data
import discounts from "../data/discounts.json"


function Discounts() {
    // discount item
    const discountItem = discounts.map((discountItem)=>{
        return(
            <div className="discount-item" key={discountItem.id}>
            <div className="item-img">
                <img src={discountItem.image} alt="discount item" draggable={false} />
            </div>
            <div className="item-desc">
            <h3 className='item-title'> {discountItem.title} </h3>
            <span className='item-price'>${discountItem.price}</span>
            </div>
        </div>
        )
    })
          // slider responsive
          const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 6
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 6
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 3
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2
            } 
        };
  return (
    <section id='discounts' className='pd-y f-wth'>
        <div className="container d-flex flex-column">
            <div className="section-header">
                <div className="header-title">
                    <DiscountIcon className='icon'></DiscountIcon>
                    <h3>discounts</h3>
                </div>
                {/* ./header-title */}
                <Link to="/discounts"> view all </Link>
            </div>
            <div className="discounts-content mg-t">
                <Carousel responsive={responsive} infinite={true} swipeable={true} autoPlay={true}>
                    {discountItem}
                </Carousel>
            </div>
            {/* ./discounts-content */}
        </div>
    </section>
  )
}

export default Discounts