import React from "react";
import styles from "./Node.module.css";

const Node = () => {
  console.log("Why aren't you showing yourself");
  return (
    <div>
      <div className={styles.node}></div>
    </div>
  );
};

export default Node;
