import { useDispatch, useSelector } from "react-redux";
import { fetchCircuitBreakers } from "../../model/slices/slicesFiltr/circuitBreakersSlice";
import { Link } from "react-router-dom";
import { fetchBrand } from "../../model/slices/cartSliceBrand";
import "./filterSidebar.scss";

function filterSidebar() {
  const { items, status } = useSelector(
    (state) => state.catalogReducer.catalogAll
  );
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  const dispatch = useDispatch();

  const onchangeSidebar = (id) => {
    dispatch(fetchCircuitBreakers({ id }));
    dispatch(fetchBrand({ id }));
  };

  return (
    <div className="block-filter">
      {sortedItems.map((item) => (
        <Link to={`/catalog/${item.id}`} key={item.id}>
          <li
            onClick={() => {
              onchangeSidebar(item.id);
            }}
          >
            {item.name}
          </li>
        </Link>
      ))}
    </div>
  );
}

export default filterSidebar;
