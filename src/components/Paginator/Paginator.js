import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let numberOfPages = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
    if (i === 20) break;
  }
  return (
    <div>
      {pages.map((page) => {
        return (
          <span
            className={currentPage === page && styles.selectedPage}
            style={{ margin: "10px", cursor: "pointer" }}
            onClick={() => {
              onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
