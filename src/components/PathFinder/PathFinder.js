import React, { useState, useEffect } from "react";

const rows = 5;
const columns = 5;
const PathFinder = () => {
  const [Grid, setGrid] = useState([]);

  const initializeGrid = () => {
    const grid = new Array(columns);
    for (let index = 0; index < grid.length; index++) {
      grid[index] = new Array(rows);
    }
  };
  return (
    <div>
      <h1>PathFinder Component</h1>
    </div>
  );
};

export default PathFinder;
