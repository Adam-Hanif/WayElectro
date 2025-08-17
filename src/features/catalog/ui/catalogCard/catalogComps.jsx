import "@/pages/catalog/catalog.scss";
import FilterSidebar from "@features/catalog/ui/filterSidebar/filterSidebar";
import SearchInpute from "@features/catalog/ui/searchInpute";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchCatalogAll } from "../../model/slices/catalogSlice";
import ProductCard from "../catalogLayout/ProductCard";
import Card from "../catalogLayout/cards";

function CatalogComps() {
  const location = useLocation();
  const navigate = useNavigate();

  const { items } = useSelector((state) => state.catalogReducer.catalogAll);
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  const { itemCircuitBreakers } = useSelector(
    (state) => state.catalogReducer.circuitBreakersSlice
  );

  const isCatalog = location.pathname === "/catalog";

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCatalogAll());

    navigate("/catalog");
  }, []);

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
          {!isCatalog
            ? itemCircuitBreakers.map((item, i) => (
                <ProductCard key={i} {...item} />
              ))
            : sortedItems.map((item, i) => <Card key={i} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default CatalogComps;
