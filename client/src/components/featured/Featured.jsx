import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80" alt="props1" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>12 props</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>12 props</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h1>12 props</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
