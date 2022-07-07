import React from "react";
import styles from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
