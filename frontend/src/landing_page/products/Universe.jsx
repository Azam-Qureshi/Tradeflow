import React from 'react'
import TradeFlowfund from '../../assets/images/zerodhaFundhouse.png'
import sensibol from "../../assets/images/sensibullLogo.svg"
import tijori from '../../assets/images/tijori.svg'
import streek from '../../assets/images/streakLogo.png'
import smallcase from '../../assets/images/smallcaseLogo.png'
import ditto from '../../assets/images/dittoLogo.png'

const Universe = () => {
  return (
    <div className='container mt-5'>
      <div className="row text-center">
        <h1 className="fs-3">The TradeFlow Universe</h1>
              <p className="text-muted fs-5 " style={{ lineHeight: "1.8" }}>
                Extend your trading and investment experience even further with our partner platforms
              </p>
      </div>
      <div className="row p-5">
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 text-center">
          <img src={TradeFlowfund} alt="zeridha" style={{width:"250px",height:"70px"}} />
          <p className='text-muted mt-3'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 text-center">
          <img src={sensibol} alt="zeridha" style={{width:"250px",height:"70px"}} />
          <p className='text-muted mt-3'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 text-center">
          <img src={tijori} alt="zeridha" style={{width:"250px",height:"70px"}} />
          <p className='text-muted mt-3'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 text-center">
          <img src={streek} alt="zeridha" style={{width:"250px",height:"70px",}} />
          <p className='text-muted mt-3'>Systematic trading platform
that allows you to create and backtest
strategies without coding.
</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 text-center">
          <img src={smallcase} alt="zeridha" style={{width:"250px",height:"70px",}} />
          <p className='text-muted mt-3'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-5 text-center">
          <img src={ditto} alt="zeridha" style={{width:"250px",height:"70px",}} />
          <p className='text-muted mt-3'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
        </div>
      </div>
      <div className='row text-center mb-5'><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button></div>
      
     
    </div>
  )
}

export default Universe
