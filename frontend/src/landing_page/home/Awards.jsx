import React from "react";
import largeBroker from "../../assets/images/largestBroker.svg";
import presslogo from "../../assets/images/pressLogos.png"

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src={largeBroker} alt="larger broker" />
        </div>
        <div className="col-lg-6 col-sm-12 p-5 d-flex flex-column justify-content-center">
          <h1>Largest stock broker in india</h1>
          <p>
            2+ million zerotha clients contributes to over 15% retail order
            volume in india daily by treding and investing in
          </p>
          <div className="row mt-5 mb-3">
            <div className="col-6">
              <ul>
                <li><p>Future and Option</p></li>
                <li><p>Comodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Stocks and ipos</p></li>
                <li><p>Direct Mutual Fund</p></li>
                <li><p>Brands and Government security</p></li>
              </ul>
            </div>
          </div>
          <img src={presslogo} alt="press logo" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
};

export default Awards;
