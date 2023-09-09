import "./list.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import SearchList from "../../components/searchList/SearchList";
import SearchRes from "../../components/searchResults/SearchRes";

const List = () => {
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <SearchList />

          <div className="listResult">
            <SearchRes />
            <SearchRes />
            <SearchRes />
            <SearchRes />
            <SearchRes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
