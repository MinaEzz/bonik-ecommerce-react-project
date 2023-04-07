import React from 'react'
import "../css/TopCategory.css"
// mui icons
import CategoryIcon from '@mui/icons-material/Category';
// react multi carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// data
import topCategory from "../data/topcategory.json"
import { Link } from 'react-router-dom';

function TopCategory() {
    // top category item
    const topCatItem = topCategory.map((category)=>{
        return (
            <div className="top-cat-item" key={category.id}>
                <img src={category.image} alt="category item" draggable={false} />
            </div>
        )
    })
    // slider responsive
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section id='top-category' className='pd-y f-wth'>
        <div className="container">
            <div className="section-header">
            <div className="header-title">
            <CategoryIcon className='icon'></CategoryIcon>
                <h3>Top Category</h3>
            </div>
            <Link to="/topcategories">view all</Link>
            </div>
            {/* ./section-header */}
            <div className="top-cat-carousel mg-t">
                <Carousel responsive={responsive}  infinite={true} swipeable={true}  showDots={true} autoPlay={true} autoPlaySpeed={2000} arrows={false} >
                    {topCatItem}
                </Carousel>
            </div>
            {/* ./top-cat-carousel */}
        </div>
    </section>
  )
}

export default TopCategory