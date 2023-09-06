import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import Featured from "../../components/featured/Featured";
import FeaturedProps from "../../components/featuredProps/featuredProps";
import MailList from "../../components/mailList/MailList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />

        <h1>Homes our guests love</h1>
        <FeaturedProps/>
        <MailList/>
      </div>
    </div>
  );
};

export default Home;
