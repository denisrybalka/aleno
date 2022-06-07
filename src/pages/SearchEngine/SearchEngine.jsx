import React from "react";
import GetStarted from "./GetStarted";

import "../../scss/pages/SearchEngine/index.scss";
import InvestmentStrategy from "./InvestmentStrategy";
import AvailableAccounts from "./AvailableAccounts";

const SearchEngine = () => {
  return (
    <div className="searchEngine">
      <GetStarted />
      <InvestmentStrategy faded/>
      <InvestmentStrategy/>
      <AvailableAccounts faded/>
      <AvailableAccounts/>
    </div>
  );
};

export default SearchEngine;
