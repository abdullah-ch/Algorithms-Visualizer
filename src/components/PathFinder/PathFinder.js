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

    createSpot(grid);
    setGrid(grid);
  };

  const createSpot = (grid) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  };

  function Spot(i, j) {
    this.x = i;
    this.y = j;
    this.g = 0;
    this.f = 0;
    this.h = 0;
  }

  return (
    <div>
      <h1>PathFinder Component</h1>
    </div>
  );
};

export default PathFinder;
