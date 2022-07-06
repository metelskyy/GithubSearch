import React, { useContext } from "react";
import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";
import { Context } from "../../context";
import { fetchRepoPage } from "../../API/getData";

const Pagination = () => {
  const { totalCount, userName, setRepoList } = useContext(Context);

  const totalPageCount = Math.ceil(totalCount / 4);

  const changePage = async (e) => {
    const res = await fetchRepoPage(e.selected + 1, userName);
    setRepoList(res);
  };

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={changePage}
        pageRangeDisplayed={1}
        pageCount={totalPageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
