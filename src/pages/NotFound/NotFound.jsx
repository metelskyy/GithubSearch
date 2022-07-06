import React from "react";
import userLogo from "../../assets/icons/user.svg";
import styles from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={userLogo} alt="userLogo" />
      <p className={styles.text}>User not found</p>
    </div>
  );
};

export default NotFound;
