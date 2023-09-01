import { useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faMinus,
  faPerson,
  faPlane,
  faPlus,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setopenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 1,
    rooms: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prevState) => ({
      ...prevState,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        <h1 className="headerTitle"></h1>
        <p className="headerDesc"></p>
        <button className="headerBtn">Sign / Register </button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yy")} to ${format(
                date[0].endDate,
                "MM/dd/yy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />

            <span className="headerSearchText">{`${options.adults} adults | ${options.children}  children | ${options.rooms} room(s)`}</span>

            <div className="options">
              <div className="optionItem">
                <span className="optionText"> Adult(s)</span>

                <div className="optionCounter">
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOptions("adults", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOptions("adults", "i")}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOptions("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOptions("children", "i")}
                  >
                    +{" "}
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText"> Rooms </span>
                <div className="optionCounter">
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOptions("rooms", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.rooms}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleOptions("rooms", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
