import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCircuitBreakers } from "../../../../redux/slices/circuitBreakersSlice";

function filterSidebar({ setLoading }) {
  const { items, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const onchangeSidebar = (id, param) => {
    dispatch(fetchCircuitBreakers({ id, param }));
    setLoading(true);
  };

  return (
    <div>
      {items.map((item, i) => (
        <li
          key={i}
          onClick={() => {
            onchangeSidebar(item.id, item.url_param);
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
