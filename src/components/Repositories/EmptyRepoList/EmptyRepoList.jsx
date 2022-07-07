import React from "react";
import styles from "./EmptyRepoList.module.css";
import repoLogo from "../../../assets/icons/rep.svg";
const EmptyRepoList = () => {
  return (
    <div className={styles.root}>
      <img className={styles.img} src={repoLogo} alt="repoLogo" />
      <p className={styles.text}>Repository list is empty</p>
    </div>
  );
};

export default EmptyRepoList;
