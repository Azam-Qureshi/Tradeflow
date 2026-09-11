import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
     <div className="row text-center p-5   border-bottom">
      <h1 className='fs-2 mb-4 mt-5'>TradeFlow Products</h1>
      <h3 className='fs-4 mb-4 text-muted'>Sleek, modern, and intuitive trading platforms</h3>
      <p className='fs-5 text-muted mb-5'>Check out our  <a href="#" style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i> </a></p>
     </div>
    </div>
  )
}

export default Hero
