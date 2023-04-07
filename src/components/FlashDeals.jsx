import React from 'react'
import "../css/FlashDeals.css"
// mui icons
import BoltIcon from '@mui/icons-material/Bolt';
import AddIcon from '@mui/icons-material/Add';
// bootstrap
import { Card, Button } from 'react-bootstrap';
// react multi carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// data
import flashdeals from "../data/flashdeals.json"
import { Link } from 'react-router-dom';

function FlashDeals() {
      // flash item 
      const flashItem = flashdeals.map((flashItem)=>{
        return(
            <div className="flash-item" key={flashItem.id}>
            <Card className='card'>
                <span className="discount badge">{flashItem.discount}</span>
                <div className="card-img">
                    <img src={flashItem.image} alt="flash product" draggable={false}/>
                </div>
                <div className='card-body'>
                    <div>
                    <h3 className='card-title'>{flashItem.name}</h3>
                    <span className='price'>${flashItem.price}</span>
                    </div>
                    <Button>
                        <AddIcon></AddIcon>
                    </Button>
                </div>
            </Card>
            </div>
        )
      })
      // slider responsive
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section id='flash-deals' className='pd-y f-wth'>
        <div className="container">
            <div className="section-header">
            <div className="header-title">
            <BoltIcon className='icon'></BoltIcon>
                <h3>flash deals</h3>
            </div>
            <Link to="/flashdeals">view all</Link>
            </div>
            {/* ./section-header */}
            <div className="flash-carousel mg-t">
            <Carousel responsive={responsive}  infinite={true} swipeable={true} >
            {flashItem}
            </Carousel>
        </div>
        {/* ./flash-carousel */}
        </div>
    </section>
  )
}

export default FlashDeals