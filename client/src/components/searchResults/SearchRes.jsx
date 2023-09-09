import "./searchRes.css";

const searchRes = () => {
  return (
    <div className="searchRes">
      <img src="" alt="" className="srImg" />
      <div className="srDesc">
        <h1 className="srTitle">Tower Street Apartments</h1>
        <span className="srDistance">500m from center</span>
        <span className="srTaxiOp">Free Airport Taxi</span>
        <span className="srSubtitle">
          Stduio Apartment with Air conditioning
        </span>
        <span className="srFeatures">
          Entire studio * 1 bathroom * 21m 1 full bed
        </span>
        <span className="srCancelOp">Free cancellation</span>
        <span className="srCancelOpSubtitle">
          Money Back Guarantee, So get this great price today
        </span>
      </div>

      <div className="srDetails">
        <div className="srRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>

        <div className="srDetailsTexts">
          <span className="srPrice">50000 NGN</span>
          <span className="srTaxOp">Inlcudes tax and fees</span>
          <button className="srCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default searchRes;
