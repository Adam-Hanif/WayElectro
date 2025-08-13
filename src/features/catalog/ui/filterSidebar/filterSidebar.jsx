import { useDispatch, useSelector } from "react-redux";
import { fetchCircuitBreakers } from "../../model/slices/circuitBreakersSlice";
import { Link } from "react-router-dom";

function filterSidebar() {
  const { items, status } = useSelector(
    (state) => state.catalogReducer.catalogAll
  );

  const dispatch = useDispatch();

  const onchangeSidebar = (id) => {
    dispatch(fetchCircuitBreakers({ id }));
  };

  return (
    <div className="block-filter" >
      {items.map((item, i) => (
        <Link to={`/catalog/${item.id}`}>
          <li
            key={i}
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
