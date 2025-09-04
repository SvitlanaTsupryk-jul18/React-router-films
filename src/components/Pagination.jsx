import React from "react";
import { useMemo } from "react";

const Pagination = (props) => {
  const { onPageChange, totalResults = 0, currentPage, perPage = 10 } = props;
  const siblingCount = 1;

  const pagination = useMemo(() => {
    let max = Math.ceil(totalResults / perPage);
    let current = currentPage;
    if (!current || !max) return null;

    let prev = current === 1 ? null : current - 1,
      next = current === max ? null : current + 1,
      items = [1];

    if (current === 1 && max === 1) return { current, prev, next, items };
    if (current > 4) items.push("…");

    const r = 3,
      r1 = current - r,
      r2 = current + r;

    for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);

    if (r2 + 1 < max) items.push("…");
    if (r2 < max) items.push(max);
    console.log(current, prev, next, items);

    return items;
    // return { current, prev, next, items };
  }, [totalResults, siblingCount, currentPage]);

  if (currentPage === 0 || totalResults < perPage) {
    return <div>What do you want to find?</div>;
  }

  let lastPage = Math.ceil(totalResults / perPage);

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="pagination-wrapper">
      {pagination && (
        <ul className="pagination-container">
          <li
            key="first"
            className={`btn pagination-btn ${
              currentPage === 1 ? "disabled" : ""
            }`}
            title="Previous page"
            aria-label="Previous page"
            onClick={onPrevious}
          >
            &lt;
          </li>

          {pagination.map((item, index) => {
            return (
              <li
                key={index}
                className={`btn pagination-btn ${
                  currentPage === index+1 ? "selected" : ""
                }`}
          
                onClick={() => onPageChange(item)}
              >
                {item}
              </li>
            );
          })}

          <li
            key="last"
            className={`btn pagination-btn ${
              currentPage === lastPage ? "disabled" : ""
            }`}
            aria-label="Next page"
            title="Next page"
            onClick={onNext}
          >
            &gt;
          </li>
        </ul>
      )}
    </div>
  );
};

export default Pagination;
