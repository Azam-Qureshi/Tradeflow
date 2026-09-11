import React from 'react'
import zero from '../../assets/images/pricingEquity.svg'
import intraday from '../../assets/images/intradayTrades.svg'

const Hero = () => {
  return (
    <div className='container'>
     <div className="row text-center p-5   ">
      <h1 className='fs-2 mb-4 mt-5'>Charges</h1>
      <h3 className='fs-4 mb-4 text-muted'>List of all charges and taxes</h3>
    
     </div>
     <div className="row p-5">
      <div className="col-lg-4 p-4 col-sm-12 text-center">
        <img src={zero} alt="zero" style={{width:"75%"}}/>
        <h1 className='fs-2 mb-3'>Free equity delivery</h1>
        <p className='text-muted fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-lg-4 p-4 col-sm-12 text-center">
        <img src={intraday} alt="zero" style={{width:"75%"}}/>
        <h1 className='fs-2 mb-3'>Intraday and F&O trades</h1>
        <p className='text-muted fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="col-lg-4 p-4 col-sm-12 text-center">
        <img src={zero} alt="zero" style={{width:"75%"}}/>
        <h1 className='fs-2 mb-3'>Free direct MF</h1>
        <p className='text-muted fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
     </div>
     </div>
  )
}

export default Hero
