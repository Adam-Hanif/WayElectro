import FilterSidebar from "@features/catalog/ui/filterSidebar/filterSidebar";
import SearchInpute from "@features/catalog/ui/searchInpute";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchCatalogAll } from "../../model/slices/catalogSlice";
import ProductCard from "../catalogLayout/ProductCard";
import Card from "../catalogLayout/cards/cards";
import Pagination from "../catalogLayout/paginate/paginate";
import "./catalogComps.scss";

function CatalogComps() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Состояние для пагинации
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15; // Количество элементов на странице

  const { items } = useSelector((state) => state.catalogReducer.catalogAll);
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  const { itemCircuitBreakers } = useSelector(
    (state) => state.catalogReducer.circuitBreakersSlice
  );

  const isCatalog = location.pathname === "/catalog";

  React.useEffect(() => {
    dispatch(fetchCatalogAll());
    navigate("/catalog");
  }, []);

  // Функция для обработки смены страницы
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Вычисляем данные для текущей страницы
  const dataToDisplay = !isCatalog ? itemCircuitBreakers : sortedItems;
  const pageCount = Math.ceil(dataToDisplay.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = dataToDisplay.slice(offset, offset + itemsPerPage);

  return (
    <div className="block-catalog">
      <div className="sorting">
        <div className="sorting_input">
          {location.pathname === "/catalog" ? null : <SearchInpute />}
        </div>
      </div>
      <div className="block-cards">
        <div className="search-filter">
          <FilterSidebar />
        </div>
        <div className="cards">
          {currentItems.map((item, i) =>
            !isCatalog ? (
              <ProductCard key={i} {...item} />
            ) : (
              <Card key={i} {...item} />
            )
          )}
        </div>
      </div>
      <div className="block_plaginate">
        {!isCatalog ? (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        ) : null}
      </div>
    </div>
  );
}

export default CatalogComps;
