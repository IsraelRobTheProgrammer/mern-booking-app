import { Link } from "react-router-dom";
import "./searchRes.css";

const searchRes = ({ item }) => {
  return (
    <div className="searchRes">
      <img src={item.phtos} alt="" className="srImg" />
      <div className="srDesc">
        <h1 className="srTitle">{item.name}</h1>
        <span className="srDistance">{item.distance}</span>
        <span className="srTaxiOp">Free Airport Taxi</span>
        <span className="srSubtitle">
          Stduio Apartment with Air conditioning
        </span>
        <span className="srFeatures">{item.desc}</span>
        <span className="srCancelOp">Free cancellation</span>
        <span className="srCancelOpSubtitle">
          Money Back Guarantee, So get this great price today
        </span>
      </div>
      <div className="srDetails">
        {item.rating ? (
          <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>
          </div>
        ) : (
          <div className="fpRating">
            <button>No Rating Yet 😢</button>
            {/* <span>Excellent</span> */}
          </div>
        )}

        <div className="srDetailsTexts">
          <span className="srPrice">{item.cheapestPrice} NGN</span>
          <span className="srTaxOp">Inlcudes tax and fees</span>

          <Link to={`/hotels/${item._id}`}>
            <button className="srCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default searchRes;
