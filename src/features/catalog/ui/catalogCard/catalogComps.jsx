import React, { useState } from "react";
import "@/pages/catalog/catalog.scss";
import Card from "../catalogLayout/cards";
import CardCircuitBreakers from "../catalogLayout/cardCircuitBreakers";
import { useDispatch, useSelector } from "react-redux";
import SearchInpute from "@features/catalog/ui/searchInpute";
import FilterSidebar from "@features/catalog/ui/filterSidebar/filterSidebar";
import { fetchCatalogAll } from "../../model/slices/catalogSlice";
import { useLocation } from "react-router-dom";

function CatalogComps() {
  const location = useLocation();

  const { items, status } = useSelector(
    (state) => state.catalogReducer.catalogAll
  );

  console.log(items);

  const { itemCircuitBreakers, statusCircuitBreakers } = useSelector(
    (state) => state.catalogReducer.circuitBreakersSlice
  );

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCatalogAll());
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
          <FilterSidebar setLoading={setLoading} />
        </div>
        <div className="cards">
          {loading
            ? itemCircuitBreakers.map((item, i) => (
                <CardCircuitBreakers key={i} {...item} />
              ))
            : items.map((item, i) => <Card key={i} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default CatalogComps;
