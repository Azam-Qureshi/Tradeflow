import React from 'react'
import ecosystem from '../../assets/images/ecosystem.png'

const Stats = () => {
  return (
    <div className='container p-5'>
      <div className="row p-5">
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className='mb-5 fs-3'>Trust with confidence</h1>
          <h2 className='fs-4'>Customer-first always</h2>
          <p className='mb-3 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments</p>
          <h2 className='fs-4'>No spam or gimmicks</h2>
          <p className='mb-3 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
          <h2 className='fs-4 '>The Zerodha universe</h2>
          <p className='mb-3 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h2 className='fs-4'>Do better with money</h2>
          <p className='mb-3 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <img src={ecosystem} alt="ecosystem" style={{width:"100%"}} />
          <div className='text-center'>
            <a href="#" className='mx-5' style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right-long"></i> </a>
            <a href="#" style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right-long"></i> </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
