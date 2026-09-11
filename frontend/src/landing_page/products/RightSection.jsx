import React from 'react'

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  linkText,
  linkUrl,
  
}) => {
  return (
  <div className="container ">
          <div className="row">
            <div className="col-lg-5 col-sm-12 p-5 d-flex flex-column justify-content-center">
              <h1 className="fs-3">{productName}</h1>
              <p className="text-muted fs-5 " style={{ lineHeight: "1.8" }}>
                {productDescription}
              </p>
              <p className="mb-5">
                <a
                  href={linkUrl}
                  className="me-5 fs-6 "
                  style={{ textDecoration: "none" }}
                >
                  {linkText}<i class="fa-solid fa-arrow-right-long ms-3"></i>
                </a>
               </p> 
            </div>
            <div className="col-lg-7 col-sm-12 p-5">
              <img src={imageUrl} alt="left image" />
            </div>
            
          </div>
        </div>
    
  
)};

export default RightSection
