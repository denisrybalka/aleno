import React from "react";
import GetStarted from "./GetStarted";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";

import { ReactComponent as BtcIcon } from "../../assets/icons/btc.svg";
import { ReactComponent as EthIcon } from "../../assets/icons/eth.svg";
import { ReactComponent as BusdIcon } from "../../assets/icons/busd.svg";

import "../../scss/pages/SearchEngine/index.scss";

const items = [
  { label: "BTC", Image: BtcIcon },
  { label: "Ethereum", Image: EthIcon },
  { label: "BUSD", Image: BusdIcon },
]
const searchList = new Array(35).fill(0).map(() => items[Math.floor(Math.random() * 3)]);

const RenderSearchResults = ({ visible, searchList }) => {
  return (
    <div className={`searchEngine-head-input-results ${visible ? "visible" : ""}`}>
      <p>Tokens</p>
      <div className="items-list">
        {
          searchList.map((item, i) => {
            const { Image, label } = item;
            return (
              <div className="item" key={i}>
                <div className="icon-wrap">
                  <Image />
                </div>
                {label}
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

const SearchEngine = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [filteredSearchList, setFilteredSearchList] = React.useState(searchList);

  React.useEffect(() => {
    if (inputValue.length > 0) {
      const filteredItems = filteredSearchList.filter(({ label }) => label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
      setFilteredSearchList(filteredItems);
    } else {
      setFilteredSearchList(searchList);
    }
  }, [inputValue])

  return (
    <div className="searchEngine">
      <div className="searchEngine-head">
        <h2>Aleno Search Engine</h2>
        <div className="searchEngine-head-input">
          <SearchIcon className="search" />
          <input
            className="input"
            placeholder="Search address, pair by symbol, name, contract or token"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <RenderSearchResults visible={inputValue.length > 0} searchList={filteredSearchList} />
        </div>
        <div className="searchEngine-head-bell">
          <BellIcon />
        </div>
      </div>
      <GetStarted />
    </div>
  );
};

export default SearchEngine;
