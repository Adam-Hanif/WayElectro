import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import debounce from "lodash.debounce";
import exitIcon from "@shared/assets/images/exitIcon.svg";
import "./searchInpute.scss";
import {
  fetchCircuitBreakers,
  setFilter,
  clearFilter,
} from "../../model/slices/circuitBreakersSlice";

function SearchInpute() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [searchValue, setSearchValue] = useState("");

  const { allItems, filter } = useSelector(
    (state) => state.catalogReducer.circuitBreakersSlice
  );
  const { itemBrand } = useSelector(
    (state) => state.catalogReducer.cartBrandSlice
  );
  // Загружаем все товары при монтировании
  useEffect(() => {
    dispatch(fetchCircuitBreakers());
  }, [dispatch]);

  const optionsBrand = [
    { value: "all", label: "Все бренды" },
    ...itemBrand.map((item) => ({ value: item.id, label: item.Name })),
  ];
  const optionsPoles = [
    { value: "all", label: "Все" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  // Очистка поиска
  const clearSearch = () => {
    setSearchValue("");
    inputRef.current.focus();
    dispatch(clearFilter());
  };

  // Дебаунс для текстового поиска
  const debouncedSearch = useCallback(
    debounce((value) => {
      dispatch(setFilter({ text: value }));
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="block_search">
      <div className="search_filter">
        <Dropdown
          options={optionsBrand}
          placeholder="Бренды"
          onChange={(e) => dispatch(setFilter({ brand: e.value }))}
        />
      </div>

      <div className="search_filter">
        <Dropdown
          options={optionsPoles}
          placeholder="Количество полюсов"
          onChange={(e) => dispatch(setFilter({ poles: e.value }))}
        />
      </div>

      <div className="search_input">
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          className="search"
          placeholder="Поиск по каталогу"
        />
        {searchValue && (
          <img
            className="exitIcon"
            src={exitIcon}
            alt="clear"
            onClick={clearSearch}
          />
        )}
      </div>
    </div>
  );
}

export default SearchInpute;
