import React from "react";
import googlePlayBadge from "../../assets/images/googlePlayBadge.svg";
import appStoreBadge from "../../assets/images/appstoreBadge.svg";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-7 col-sm-12 p-5">
          <img src={imageUrl} alt="left image" />
        </div>
        <div className="col-lg-5 col-sm-12 p-5 d-flex flex-column justify-content-center">
          <h1 className="fs-3">{productName}</h1>
          <p className="text-muted fs-5 " style={{ lineHeight: "1.8" }}>
            {productDescription}
          </p>
          <p className="mb-5">
            <a
              href={tryDemo}
              className="me-5 fs-6 "
              style={{ textDecoration: "none" }}
            >
              Try Demo<i class="fa-solid fa-arrow-right-long ms-3"></i>
            </a>
            <a
              href={learnMore}
              className="fs-6"
              style={{ textDecoration: "none" }}
            >
              Learn More<i class="fa-solid fa-arrow-right-long ms-3"></i>
            </a>
          </p>
          <p>
            <a href={googlePlay}>
              <img src={googlePlayBadge} alt="google pay" />
            </a>
            <a href={appStore}>
              <img src={appStoreBadge} alt="app store" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
