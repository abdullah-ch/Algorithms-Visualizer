import React from "react";
import "./Node.css";

const Node = ({ isStartingPoint, isEndingPoint, row, column }) => {
  const classs = isStartingPoint
    ? "node-start"
    : isEndingPoint
    ? "node-end"
    : "";

  // console.log("classess", classs);

  return (
    <div>
      <div className={`node ${classs}`} id={`node-${row}-${column}`}></div>
      {/* // {isStartingPoint
                  //   ? console.log("green", `row column are ${row} and ${column}`)
                  //   : null}
                  // {isEndingPoint
                  //   ? console.log("laal", `row column are ${row} and ${column}`)
                  //   : null} */}
    </div>
  );
};

export default Node;
