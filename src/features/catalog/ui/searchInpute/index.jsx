import { useDispatch, useSelector } from "react-redux";
import React from "react";
import debounce from "lodash.debounce";
import exitIcon from "@shared/assets/images/exitIcon.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import { setSearchValue } from "../../redux/slices/filterSlice";
function SearchInpute() {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const { itemBrand, statusBrand } = useSelector(
    (state) => state.catalogReducer.cartBrandSlice
  );

  const options = itemBrand.map((item) => {
    return item.Name;
  });
  const options2 = ["1", "2", "3", "4"];

  const onClckClear = () => {
    setValue("");
    setSearchValue("");
    inputRef.current.focus();
  };

  const updaraSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updaraSearchValue(event.target.value);
  };
  return (
    <div className="block_search">
      <div className="search_filter">
        <Dropdown options={options} placeholder="Бренды" />
      </div>
      <div className="search_filter">
        <Dropdown
          onChange={(e) => {
            console.log(e.value);
          }}
          options={options2}
          placeholder="Количество полюсов"
        />
      </div>
      <div className="search_input">
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className="search"
          type="text"
          placeholder="Поиск по каталогу"
        />
        {value && (
          <img
            onClick={onClckClear}
            className="exitIcon"
            src={exitIcon}
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default SearchInpute;
