import { useDispatch } from "react-redux";
import React from "react";
import debounce from "lodash.debounce";
import exitIcon from "../../assets/images/exitIcon.svg";
import { setSearchValue } from "../../redux/slices/filterSlice";
function SearchInpute() {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const inputRef = React.useRef();

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
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="search"
        type="text"
        placeholder="Поиск по каталогу"
      />
      {value && (
        <img onClick={onClckClear} className="exitIcon" src={exitIcon} alt="" />
      )}
    </div>
  );
}

export default SearchInpute;
