import FilterSidebar from "@features/catalog/ui/filterSidebar/filterSidebar";
import SearchInpute from "@features/catalog/ui/searchInpute";
import React, { useState, useEffect, useMemo, useRef } from "react";
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

  // ссылка на блок с карточками
  const cardsRef = useRef(null);

  // Состояние пагинации
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  const { items } = useSelector((state) => state.catalogReducer.catalogAll);
  const { itemCircuitBreakers } = useSelector(
    (state) => state.catalogReducer.circuitBreakersSlice
  );

  const isCatalog = location.pathname === "/catalog";

  useEffect(() => {
    dispatch(fetchCatalogAll());
  }, [dispatch]);

  // Мемоизация списка
  const dataToDisplay = useMemo(() => {
    const base = isCatalog
      ? [...items].sort((a, b) => a.name.localeCompare(b.name))
      : itemCircuitBreakers;
    return base ?? [];
  }, [isCatalog, items, itemCircuitBreakers]);

  const pageCount = Math.max(1, Math.ceil(dataToDisplay.length / itemsPerPage));
  const offset = currentPage * itemsPerPage;
  const currentItems = dataToDisplay.slice(offset, offset + itemsPerPage);

  // Сброс страницы при смене данных
  useEffect(() => {
    setCurrentPage(0);
  }, [isCatalog, dataToDisplay.length]);

  // При клике на номер страницы
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);

    // прокрутка плавно к блоку карточек
    if (cardsRef.current) {
      const offsetTop =
        cardsRef.current.getBoundingClientRect().top + window.scrollY - 120;
      // -120 = отступ от верха (можно поменять)
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div className="block-catalog">
      <div className="sorting">
        <div className="sorting_input">
          {isCatalog ? null : <SearchInpute />}
        </div>
      </div>

      <div className="block-cards">
        <div className="search-filter">
          <FilterSidebar />
        </div>

        <div className="cards" ref={cardsRef}>
          {currentItems.map((item) =>
            !isCatalog ? (
              <ProductCard key={item.id} {...item} />
            ) : (
              <Card key={item.id} {...item} />
            )
          )}
        </div>
      </div>

      <div className="block_plaginate">
        {!isCatalog ? (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CatalogComps;
