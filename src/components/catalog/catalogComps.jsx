import React from "react";
import "./catalog.scss";
import catalogSearch from "../../assets/json/catalog.json";
import Card from "./cards";
import { Link } from "react-router-dom";
import Skeleton from "./skeleton";
import Paginate from "../paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryId,
  setPageCount,
  setSearchValue,
} from "../../redux/slices/filterSlice";
import SearchInpute from "../searchInpute";
import { fetchProducts } from "../../redux/slices/productSlice";

function CatalogComps() {
  const { categoryId, pageCount, searchValue } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
    dispatch(setPageCount(1));
  };

  const onChangePage = (page) => {
    dispatch(setPageCount(page));
    window.scrollTo(50, 500);
  };

  React.useEffect(() => {
    const Сategory = categoryId > 0 ? `category=${categoryId}` : "";
    const Search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      fetchProducts({
        pageCount,
        Сategory,
        Search,
      })
    );
  }, [categoryId, searchValue, pageCount]);

  return (
    <div className="block-catalog">
      <div className="sorting">
        <div className="sorting_input">
          <SearchInpute />
        </div>
      </div>
      <div className="block-cards">
        <div className="search-filter">
          {catalogSearch.map((item, i) => (
            <Link key={i} to={"#"}>
              <li
                onClick={() => onChangeCategory(i)}
                className={categoryId === i ? "active" : ""}
              >
                {item}
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
      <Paginate pageCount={pageCount} onChangePage={onChangePage} />
    </div>
  );
}

export default CatalogComps;
