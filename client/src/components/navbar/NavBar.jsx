import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="navContainer">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none"}}>
          <span className="logo">Booking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
