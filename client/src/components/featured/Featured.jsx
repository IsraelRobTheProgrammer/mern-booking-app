import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/hotels/countByCity?cities=Lagos,port-harcourt,abuja"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <>
          {" "}
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80"
              alt="props1"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lagos</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Port-Harcourt</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Abuja</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
          {" "}
        </>
      )}
    </div>
  );
};

export default Featured;
