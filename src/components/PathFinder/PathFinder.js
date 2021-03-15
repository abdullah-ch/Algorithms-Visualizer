import React, { useState, useEffect } from "react";
import Node from "../Node/Node";
import styles from "../PathFinder/PathFinder.module.css";

const rows = 10;
const columns = 25;

// need to make this dynamic
const startNodeRow = 0;
const startNodeColumn = 0;
const endNodeRow = rows - 1;
const endNodeColumn = columns - 1;

const PathFinder = () => {
  const [Grid, setGrid] = useState([]);

  useEffect(
    () => {
      initializeGrid();
    },
    // eslint-disable-next-line
    []
  );

  const initializeGrid = () => {
    const grid = new Array(rows);
    for (let index = 0; index < rows; index++) {
      grid[index] = new Array(columns);
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
    this.isStartingPoint =
      this.x === startNodeRow && this.y === startNodeColumn;
    this.isEndingPoint = this.x === endNodeRow && this.y === endNodeColumn;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.neighbours = [];
    this.previous = 0;
    this.addNeighbours = function (grid) {
      let i = this.x;
      let j = this.y;

      // move up if spot's x-axis is greate than 0 because at 0 you cannot go upwards(out of bounds)
      if (i > 0) this.neighbours.push([i - 1][j]);
      // move down if spot's x-axis can move downwards and do not exceed grids row
      if (i < rows - 1) this.neighbours.push([i + 1][j]);
      // move leftwards if spot's y axis is still greater than 0 as at 0 if you move right you'll just got out of bounds
      if (j > 0) this.neighbours.push([i][j - 1]);
      // move rightwards if spot's y is still less than the whole grid's column
      if (j < columns - 1) this.neighbours.push([i][j + 1]);
    };

    console.log(".....//////////////////////X and Y are", this.x, this.y);
  }

  //   console.log("Grid", Grid);
  //   console.log("Grid rows", Grid.length);
  //   console.log("Grid columns", Grid[0].length);

  const gridMadeUpOfNodes = (
    <div>
      {Grid.map((row, index) => {
        // console.log("Rrrrrrow mein kia hai", row);
        return (
          <div key={index} className={styles.rowWrapper}>
            {row.map((column, index) => {
              // console.log("column mein kia hai", column);
              const { isStartingPoint, isEndingPoint, x, y } = column;
              console.log({ isStartingPoint, isEndingPoint });
              return (
                <Node
                  key={index}
                  isStartingPoint={isStartingPoint}
                  isEndingPoint={isEndingPoint}
                  row={x}
                  column={y}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <h1 className={styles.container}>Algorithm Visualizer</h1>
      <div className={styles.container}>{gridMadeUpOfNodes}</div>
    </>
  );
};

export default PathFinder;
