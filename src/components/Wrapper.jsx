import React from 'react'
import "../css/Wrapper.css"
// mui icons
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


function Wrapper() {
  return (
    <section id='wrapper' className='pd-y f-wth'>
        <div className="container">
        <div className="wrapper-content">
            <div className="row justify-content-between align-items-center flex-wrap">
                <div className="col col-lg-3 col-md-6 col-12">
                    <div className="wrapper-item">
                        <div className="wrapper-icon">
                            <LocalShippingIcon></LocalShippingIcon>
                        </div>
                        {/* ./icon */}
                        <div className="wrapper-desc">
                            <h3> world wide delivery </h3>
                            <p> We offer competitive prices on our 100 million plus product any range. </p>
                        </div>
                        {/* ./wrapper-desc */}
                    </div>
                    {/* ./wrapper-item */}
                </div>
                <div className="col col-lg-3 col-md-6 col-12">
                    <div className="wrapper-item">
                        <div className="wrapper-icon">
                            <PaymentIcon></PaymentIcon>
                        </div>
                        {/* ./icon */}
                        <div className="wrapper-desc">
                            <h3> safe payment </h3>
                            <p> We offer competitive prices on our 100 million plus product any range. </p>
                        </div>
                        {/* ./wrapper-desc */}
                    </div>
                    {/* ./wrapper-item */}
                </div>
                <div className="col col-lg-3 col-md-6 col-12">
                    <div className="wrapper-item">
                        <div className="wrapper-icon">
                            <SecurityIcon></SecurityIcon>
                        </div>
                        {/* ./icon */}
                        <div className="wrapper-desc">
                            <h3> shop with confidence </h3>
                            <p> We offer competitive prices on our 100 million plus product any range. </p>
                        </div>
                        {/* ./wrapper-desc */}
                    </div>
                    {/* ./wrapper-item */}
                </div>
                <div className="col col-lg-3 col-md-6 col-12">
                    <div className="wrapper-item">
                        <div className="wrapper-icon">
                            <SupportAgentIcon></SupportAgentIcon>
                        </div>
                        {/* ./icon */}
                        <div className="wrapper-desc">
                            <h3> 24/7 support </h3>
                            <p> We offer competitive prices on our 100 million plus product any range. </p>
                        </div>
                        {/* ./wrapper-desc */}
                    </div>
                    {/* ./wrapper-item */}
                </div>
            </div>
        </div>
        {/* ./wrapper-content */}
        </div>
    </section>
  )
}

export default Wrapper