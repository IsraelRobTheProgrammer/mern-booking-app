import useFetch from "../../hooks/useFetch";
import "./featuredProps.css";

const FeaturedProps = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/hotels/?featured=true&limit=4"
  );
  console.log(data);

  return (
    <div className="fp">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <>
          {data &&
            data.map((item) => (
              <div className="fpItem" key={item._id}>
                <img src={item.photos} alt="" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting From {item.cheapestPrice} NGN
                </span>
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
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProps;
