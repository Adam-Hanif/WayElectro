// components/catalogLayout/paginate/paginate.jsx
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, currentPage, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={"←"}
      nextLabel={"→"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      // ВАЖНО: делаем управляемой, чтобы UI всегда совпадал со стейтом
      forcePage={currentPage}
      // Немного удобств
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      renderOnZeroPageCount={null}
      // Классы
      containerClassName={"pagination"}
      pageClassName={"pagination__item"} // <li>
      pageLinkClassName={"pagination__link"} // <a>
      previousClassName={"pagination__item"}
      nextClassName={"pagination__item"}
      previousLinkClassName={"pagination__link pagination__link--prev"}
      nextLinkClassName={"pagination__link pagination__link--next"}
      breakClassName={"pagination__item"}
      breakLinkClassName={"pagination__link"}
      activeClassName={"is-active"} // на <li>
      activeLinkClassName={"pagination__link--active"}
      disabledClassName={"is-disabled"} // на <li>
      disabledLinkClassName={"pagination__link--disabled"}
    />
  );
};

export default Pagination;
