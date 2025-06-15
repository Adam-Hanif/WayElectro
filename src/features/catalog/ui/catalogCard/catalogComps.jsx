import React, { useState } from "react";
import "./catalog.scss";
import Card from "../cards/cards";
import CardBrands from "../cardBrands/cardBrands";
import CardCircuitBreakers from "../cardCircuitBreakers/cardCircuitBreakers";
import { Link } from "react-router-dom";
import Skeleton from "../skeleton/skeleton";
import { useDispatch, useSelector } from "react-redux";
import SearchInpute from "../../../../components/searchInpute";
import { fetchProducts, setItems } from "../../../../redux/slices/productSlice";
import FilterSidebar from "../../../components/catalog/filterSidebar";

function CatalogComps() {
  const { items, status } = useSelector((state) => state.product);
  const { itemCircuitBreakers, statusCircuitBreakers } = useSelector(
    (state) => state.circuitBreakersSlice
  );

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="block-catalog">
      <div className="sorting">
        <div className="sorting_input">
          <SearchInpute />
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
