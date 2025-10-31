import FilterSidebar from "@features/catalog/ui/filterSidebar/filterSidebar";
import SearchInpute from "@features/catalog/ui/searchInpute";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchCatalogAll } from "../../model/slices/catalogSlice";
import {
  fetchCircuitBreakers,
  selectCircuitBreakersVisible,
} from "../../model/slices/slicesFiltr/circuitBreakersSlice";
import ProductCard from "../catalogLayout/ProductCard";
import Card from "../catalogLayout/cards/cards";
import Pagination from "../catalogLayout/paginate/paginate";
import "./catalogComps.scss";

function CatalogComps() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams(); // если у тебя есть id в роуте для автоматов (например /catalog/avtomaty/:id)

  const cardsRef = useRef(null);

  // пагинация
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  // общий каталог
  const { items } = useSelector((state) => state.catalogReducer.catalogAll);

  // автоматы — БЕРЁМ ЧЕРЕЗ СЕЛЕКТОР
  const circuitBreakers = useSelector(selectCircuitBreakersVisible);

  const isCatalog = location.pathname === "/catalog";

  // грузим общий каталог для /catalog
  useEffect(() => {
    if (isCatalog) dispatch(fetchCatalogAll());
  }, [dispatch, isCatalog]);

  // грузим автоматы для внутренних страниц каталога
  useEffect(() => {
    if (!isCatalog) {
      // подставь нужный id. Если его нет в роуте — временно поставь 1
      const effectiveId = id ?? 1;
      dispatch(fetchCircuitBreakers({ id: effectiveId }));
    }
  }, [dispatch, isCatalog, id]);

  // выбираем источник данных
  const dataToDisplay = useMemo(() => {
    const base = isCatalog
      ? [...items].sort((a, b) => a.name.localeCompare(b.name))
      : circuitBreakers;
    return base ?? [];
  }, [isCatalog, items, circuitBreakers]);

  const pageCount = Math.max(1, Math.ceil(dataToDisplay.length / itemsPerPage));
  const offset = currentPage * itemsPerPage;
  const currentItems = dataToDisplay.slice(offset, offset + itemsPerPage);

  // ресет страницы при смене данных
  useEffect(() => {
    setCurrentPage(0);
  }, [isCatalog, dataToDisplay.length]);

  // клик пагинации + скролл к карточкам
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    if (cardsRef.current) {
      const offsetTop =
        cardsRef.current.getBoundingClientRect().top + window.scrollY - 120;
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
