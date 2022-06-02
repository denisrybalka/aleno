import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";

import "../../scss/pages/SearchEngine/index.scss";
import GetStarted from "./GetStarted";

const SearchEngine = () => {
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
          />
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
