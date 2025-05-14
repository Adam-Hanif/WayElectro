import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import "./catalog.scss"
import Skeleton from "./skeleton"

import { fetchProducts } from "../../redux/slices/productSlice"
import SearchInpute from "../searchInpute"

function CatalogComps() {
  const { items, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    // if (id === 0) {
    //   dispatch(fetchProducts());
    // } else {
    //   const categoryItem = items.filter((item) => item.id === id);
    //   const categoryId = categoryItem.map((item) => {
    //     return item.id;
    //   });

    //   // dispatch(fetchProducts(categoryId));
      
    // }

    // console.log(id);
  };

  React.useEffect(() => {
    dispatch(fetchProducts(10));
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
            <Link key={i} to={`/catalog/${item.id}`}>
              <li
                // onClick={() => {
                //   onChangeCategory(item.id);
                // }}
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
            : <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default CatalogComps;
