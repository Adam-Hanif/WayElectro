import "@/pages/catalog/catalog.scss";
import FilterSidebar from "@features/catalog/ui/filterSidebar/filterSidebar";
import SearchInpute from "@features/catalog/ui/searchInpute";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchCatalogAll } from "../../model/slices/catalogSlice";
import CardCircuitBreakers from "../catalogLayout/cardCircuitBreakers";
import Card from "../catalogLayout/cards";

function CatalogComps() {
  const location = useLocation();

  const { items } = useSelector(
    (state) => state.catalogReducer.catalogAll
  );

  console.log(11);

  const { itemCircuitBreakers } = useSelector(
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
