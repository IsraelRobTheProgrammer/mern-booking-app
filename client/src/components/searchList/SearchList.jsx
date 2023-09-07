import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";

const SearchList = () => {
  const location = useLocation();
  const [dest, setDest] = useState(location.state.dest);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);

  return (
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
            <input type="number" className="listOptionInput" />
          </div>

          <div className="listOptionItem">
            <span className="OptionText">
              Max Price <small>per night</small>
            </span>
            <input type="number" className="listOptionInput" />
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
      <button>Search</button>
    </div>
  );
};

export default SearchList;
