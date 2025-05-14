import React, { useState } from "react";
import "./catalog.scss";
import catalogSearch from "../../assets/json/catalog.json";
import Card from "./cards";
import { Link } from "react-router-dom";
import Skeleton from "./skeleton";
import Paginate from "../paginate";
import { useDispatch, useSelector } from "react-redux";

import SearchInpute from "../searchInpute";
import { fetchProducts } from "../../redux/slices/productSlice";

function CatalogComps() {
  const { items, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    if (id === 0) {
      dispatch(fetchProducts());
    } else {
      const categoryItem = items.filter((item) => item.id === id);
      const categoryId = categoryItem.map((item) => {
        return item.id;
      });

      dispatch(fetchProducts(categoryId));
      console.log(categoryItem);
    }
  };
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
          {items.map((item, i) => (
            <Link key={i} to={"#"}>
              <li
                onClick={() => {
                  onChangeCategory(item.id);
                }}
              >
                {item.name}
              </li>
            </Link>
          ))}

          <button
            onClick={() => {
              onChangeCategory(0);
            }}
          >
            Сбросить фильтры
          </button>
        </div>
        <div className="cards">
          {status === "loading"
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default CatalogComps;
