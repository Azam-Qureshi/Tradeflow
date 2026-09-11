import React from "react";
import nitinlKamat from "../../assets/images/nithinKamath.jpg";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5  text-center border-top">
        <h1 className="fs-3">People</h1>
      </div>
      <div className="row pb-5 pe-5 ps-5  ">
        <div
          className="col-lg-6 col-sm-12 p-5 text-muted d-flex flex-column justifi-content-center align-items-center"
          style={{ fontSize: "1.2em", lineHeight: "1.8" }}
        >
          <img
            src={nitinlKamat}
            alt="founder"
            style={{ width: "60%", borderRadius: "50%" }}
          />
          <h4 className=" text-center mt-4">Nithin Kamath</h4>
          <h6 className="text-center text-muted">Founder, CEO</h6>
        </div>
        <div
          className="col-lg-6 col-sm-12 pb-5 ps-5 pe-5 text-muted"
          style={{ fontSize: "1.2em", lineHeight: "1.8" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p><p>
            He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). 
          </p>
          
          <p>
            Playing basketball is
            his zen. 
          </p>
          <p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage</a> / <a href="#" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a> </p>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
