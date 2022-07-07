import React, { useContext } from "react";
import Repository from "../Repositories/Repository/Repository";
import styles from "./Repositories.module.css";
import { Context } from "../../context";
import Pagination from "./Pagination/Pagination";
import EmptyRepoList from "../Repositories/EmptyRepoList/EmptyRepoList";

const Repositories = () => {
  const { repoList, totalCount } = useContext(Context);

  const drawRepos = () => {
    return (
      <>
        <h2 className={styles.header}>Repositories({totalCount})</h2>
        {repoList.map((repository) => {
          return <Repository key={repository.id} repo={repository} />;
        })}
        <Pagination />
      </>
    );
  };

  return (
    <div className={styles.repositories}>
      {repoList.length === 0 ? <EmptyRepoList /> : drawRepos()}
    </div>
  );
};

export default Repositories;
