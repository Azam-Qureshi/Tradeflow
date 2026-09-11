import React from 'react'

const Hero = () => {
  return (
    <section style={{backgroundColor:"rgb(56,126,209)", color:"#fff"}}>
     <div className='container'>
      <div className="d-flex justify-content-between p-5">
        
          <h4>Support Portal</h4>
        
       
          <a href="" style={{color:"#fff", }}>Track Tickets</a>
        
      </div>
      <div className="row ps-5 pe-5 pt-0 pb-5">
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className='fs-3 mb-4'>Search for an answer  or browse help topic to create a ticket</h1>
          <input className='mb-4' id="supportinput" type="text" placeholder='Eg. how do I activate F&O' /><br></br>
          <a className='me-3' href="" style={{color:"#fff"}}>Track acount opening</a>
          <a className='me-3' href="" style={{color:"#fff"}}>Track segment activation</a>
          <a className='me-3' href="" style={{color:"#fff"}}>Intra day margins</a>
          <a className='me-3'  className='me-3'href="" style={{color:"#fff"}}>Kite user manual</a>
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className='fs-3'>Featured</h1>
          <a className='mb-3'  href="" style={{color:"#fff"}}>1. Current takeover and delisting</a><br></br><br></br>
          <a className='mb-3' href="" style={{color:"#fff"}}>2. Latest intraday leverage</a>
        </div>
      </div>
    </div>
    </section>
    
  )
}

export default Hero
