import React from "react";
import "./paginate.scss";
import ReactPaginate from "react-paginate";

function Paginate({ pageCount, onChangePage }) {
  return (
    <div>
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={4}
        forcePage={pageCount - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Paginate;
