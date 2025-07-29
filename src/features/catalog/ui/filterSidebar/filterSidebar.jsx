import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCircuitBreakers } from "../../model/slices/circuitBreakersSlice";

function filterSidebar({ setLoading }) {
  const { items, status } = useSelector(
    (state) => state.catalogReducer.catalogAll
  );

  const dispatch = useDispatch();

  const onchangeSidebar = (id) => {
    dispatch(fetchCircuitBreakers({ id }));
    setLoading(true);
  };

  return (
    <div>
      {items.map((item, i) => (
        <li
          key={i}
          onClick={() => {
            onchangeSidebar(item.id);
          }}
        >
          {item.name}
        </li>
      ))}
      {/* <button
        onClick={() => {
          onChangeCategory(0);
        }}
      >
        Сбросить фильтры
      </button> */}
    </div>
  );
}

export default filterSidebar;
