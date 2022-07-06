import React from "react";
import styles from "./Repository.module.css";
const Repository = ({ repo }) => {
  return (
    <>
      <div className={styles.item}>
        <a
          rel="noreferrer"
          target="_blank"
          className={styles.link}
          href={repo.html_url}
        >
          {repo.name}
        </a>
        <p className={styles.title}>
          {repo.description ? repo.description : "No description"}
        </p>
      </div>
    </>
  );
};

export default Repository;
