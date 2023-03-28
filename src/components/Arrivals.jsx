import React from 'react'
import "../css/Arrivals.css"
// mui icons
import FiberNewIcon from '@mui/icons-material/FiberNew';
// data
import arrivals from "../data/newarrivals.json"
import { Link } from 'react-router-dom';

function Arrivals() {

    const arrivalItem = arrivals.map((arrivalItem)=>{
        return (
            <div className="col col-lg-2 col-md-4 col-6" key={arrivalItem.id}>
            <div className="arrival-item">
                <div className="arrival-item-img">
                    <img src={arrivalItem.image} alt="arrival item" />
                </div>
                <div className="arrival-item-desc">
                    <h3>{arrivalItem.name}</h3>
                    <span>${arrivalItem.price}</span>
                </div>
            </div>
            </div>
        )
    })
  return (
    <>
    <section id='arrivals' className='pd-y f-wth'>
        <div className="container">
            <div className="section-header">
                <div className="header-title">
                <FiberNewIcon className='icon'></FiberNewIcon>
                <h3>new arrivals</h3>
                </div>
                <Link to="/arrivals">view all</Link>
            </div>
            {/* ./section-header */}
            <div className="arrival-content mg-t">
                <div className="row justify-content-between align-items-center flex-wrap">
                    {arrivalItem}
            </div>
        </div>
            {/* ./arrival-content  */}
        </div>
    </section>
    </>
  )
}

export default Arrivals