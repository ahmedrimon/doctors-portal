import React from "react";
import "./FeatureService.css";

import baby from "../../../images/baby.png";

const FeatureService = () => {
  return (
    <div className="container d-flex mt-5">

      <div className="col-md-6">
        <img className="baby-picture" src={baby} alt="" />
      </div>

      <div className="col-md-6">
        <h1 className="mt-5" style={{color: '#3a4256'}}>Exceptional Dental <br/> Care, on Your Terms  </h1>
        <p className="mt-5">
          it is a long estabished fact that a reader will be distracted by the
          readable content of a page when looking at its layout.the point of
          using lorem ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using `Content here, content here`, making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>

        <button className="btn btn-primary mt-5">Learn More</button>
      </div>
    </div>
  );
};

export default FeatureService;
