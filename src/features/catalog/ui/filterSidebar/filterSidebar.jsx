import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchBrand } from "../../model/slices/cartSliceBrand";
import {
  fetchCircuitBreakers,
  setFilter,
  clearFilter, // 👈 импортируем
} from "../../model/slices/slicesFiltr/circuitBreakersSlice";

import "./filterSidebar.scss";

function FilterSidebar() {
  const { items } = useSelector((state) => state.catalogReducer.catalogAll);
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  const dispatch = useDispatch();

  const onchangeSidebar = (id) => {
    // 🧹 сбрасываем фильтры при смене категории
    dispatch(clearFilter());

    // грузим товары выбранной категории
    dispatch(fetchCircuitBreakers({ id }));

    // грузим бренды для этой категории
    dispatch(fetchBrand({ id }));
  };

  return (
    <div className="block-filter">
      {sortedItems.map((item) => (
        <Link to={`/catalog/${item.id}`} key={item.id}>
          <li onClick={() => onchangeSidebar(item.id)}>{item.name}</li>
        </Link>
      ))}
    </div>
  );
}

export default FilterSidebar;
