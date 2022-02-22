import "./App.css";
import React, { useState, useEffect } from "react";
import policyListData from "../Data/smallData.js";
import PolicyTable from "./PolicyTable.js";
import Search from "./Search.js";
import SortRadio from "./SortRadio.js";
const _ = require("lodash");

function App() {
  const [policyList, setpolicyList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState("none");

  useEffect(() => {
    policyListRender(policyListData);
  }, [searchInput, sortType]);

  function policyListRender() {
    var dataCopy = policySearchFilter(policyListData.slice());
    var sortedData = policySorter(dataCopy);
    setpolicyList(sortedData);
  }

  function policySorter(policyList) {
    var sortDirection = {
      none: "asc",
      name: "asc",
      start_date: "desc",
      published_date: "desc",
      rules: "desc",
    };
    return _.orderBy(
      policyList,
      [
        function (policy) {
          if (policy[sortType] !== "None") {
            return policy[sortType];
          }
        },
      ],
      [sortDirection[sortType]]
    );
  }
  function policySearchFilter(policyList) {
    if (searchInput.length === 0) {
      return policyList;
    } else {
      return policyList.filter((data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  }

  return (
    <div className="App">
      <h1>City Mobility Policies</h1>
      <div className="filters">
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <SortRadio setSortType={setSortType} />
      </div>
      <PolicyTable policyList={policyList} />
    </div>
  );
}

export default App;
