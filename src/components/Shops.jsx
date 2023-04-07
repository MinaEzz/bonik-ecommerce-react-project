import React from 'react'
import "../css/Shops.css"
import { Link } from 'react-router-dom'
// data 
import brands from "../data/brands.json"
import mobiles from "../data/mobile phones.json"
// bootstrap 
import {Card, Button} from 'react-bootstrap';
// mui icons
import AddIcon from '@mui/icons-material/Add';


function Shops() {
    // brand item
    const brandItem = brands.map((brandItem)=>{
        return(
            <div className="brand-item d-flex align-itmes-center" key={brandItem.id}>
                <img src={brandItem.image} alt="brand" title={brandItem.name} />
                <p>{brandItem.name}</p>
            </div>
        )
    })
    // mobile item 
    const mobileItem = mobiles.map((mobileItem)=>{
        return(
            <div className="col col-lg-4 col-md-6 col-12" key={mobileItem.id}>
            <div className="mobile-item">
            <Card className='card'>
                <span className="discount badge">{mobileItem.discount}</span>
                <div className="card-img">
                    <img src={mobileItem.image} alt="mobile item" draggable={false}/>
                </div>
                <div className='card-body'>
                    <div>
                    <h3 className='card-title'>{mobileItem.name}</h3>
                    <span className='price'>${mobileItem.price}</span>
                    </div>
                    <Button>
                        <AddIcon></AddIcon>
                    </Button>
                </div>
            </Card>
            </div>
        </div>
        )
    })
  return (
    <section id='shops' className='pd-y f-wth'>
        <div className="container">
            <div className="shops-content">
                <div className="row justify-content-between">
                    <div className="col col-3">
                        <aside className='brands-aside'>
                            <div className='aside-header'>
                                <h3>brands</h3>
                            </div>
                            <div className="brands d-flex flex-column">
                                {brandItem}
                            </div>
                        </aside>
                        {/* ./shops-aside */}
                    </div>
                    <div className="col col-9 ">
                        <div className="mobile-phones">
                            <div className="mobile-phones-header d-flex align-items-center justify-content-between">
                                <h3>mobile phones</h3>
                                <Link to={"/shops"}> view all </Link>
                            </div>
                            <div className="mobile-phones-items mg-t">
                                <div className="row align-items-center justify-content-around flex-wrap">
                                    {mobileItem}
                                </div>
                            </div>
                        </div>
                        {/* ./mobile-phones */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shops