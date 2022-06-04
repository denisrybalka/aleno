import React from "react";
import GetStarted from "./GetStarted";

import "../../scss/pages/SearchEngine/index.scss";
import InvestmentStrategy from "./InvestmentStrategy";

const SearchEngine = () => {
  return (
    <div className="searchEngine">
      <GetStarted />
      <InvestmentStrategy/>
    </div>
  );
};

export default SearchEngine;
