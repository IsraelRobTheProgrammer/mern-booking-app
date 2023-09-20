import "./list.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";

import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
// import  reFetch  from "../../hooks/useFetch";

import SearchRes from "../../components/searchResults/SearchRes";

const List = () => {
  const location = useLocation();
  const [dest, setDest] = useState(location.state.dest);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000000);

  const [openDate, setOpenDate] = useState(false);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8000/api/hotels/?city=${dest}&min=${min}&max=${max}`
  );

  const handleClick = () => {
    reFetch();
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>

            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={dest} />
            </div>

            <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>

            <div className="listItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="listOptionItem">
                  <span className="OptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="listOptionInput"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="OptionText">
                    Max Price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="listOptionInput"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="OptionText">Adults</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adults}
                    min={1}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="OptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="listOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="OptionText">Room</span>
                  <input
                    min={1}
                    type="number"
                    className="listOptionInput"
                    placeholder={options.rooms}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading Please Wait"
            ) : (
              <>
                {data &&
                  data.map((item) => <SearchRes item={item} key={item._id} />)}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
