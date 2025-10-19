import ReactPaginate from "react-paginate";
import "./pagination.scss";
const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={"←"}
      nextLabel={"→"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      pageLinkClassName={"pagination__link"}
      previousLinkClassName={"pagination__link pagination__link--prev"}
      nextLinkClassName={"pagination__link pagination__link--next"}
      breakLinkClassName={"pagination__link"}
      activeLinkClassName={"pagination__link--active"}
      disabledLinkClassName={"pagination__link--disabled"}
    />
  );
};

export default Pagination;
