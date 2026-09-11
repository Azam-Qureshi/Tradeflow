import React from "react";

const Pricing = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right-long"></i>{" "}
          </a>
        </div>
        <div className="col-lg-2 col-sm-12"></div>
        <div className="col-lg-6 col-sm-12 mb-5">
          <div className="row text-center">
            <div className="col border p-4">
              <h1 className="mb-3">
                <i className="fa-solid fa-indian-rupee-sign fs-2"></i>0
              </h1>
              <p className="text-muted">
                Free equity delivery <br></br> and direct mutual funds
              </p>
            </div>
            <div className="col border p-3 d-flex flex-column justify-content-center">
              <h1 className="mb-3">
                <i className="fa-solid fa-indian-rupee-sign fs-2"></i>20
              </h1>
              <p className="text-muted">
                Intraday and F&O 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
