import React from "react";
import searchLogo from "../../assets/icons/search.svg";
import styles from "./Start.module.css";
const Start = () => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={searchLogo} alt="searchLogo" />
      <p className={styles.text}>Start with searching a GitHub user</p>
    </div>
  );
};

export default Start;
