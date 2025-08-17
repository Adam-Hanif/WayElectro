import { useDispatch, useSelector } from "react-redux";
import { fetchCircuitBreakers } from "../../model/slices/circuitBreakersSlice";
import { Link } from "react-router-dom";

function filterSidebar() {
  const { items, status } = useSelector(
    (state) => state.catalogReducer.catalogAll
  );
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  const dispatch = useDispatch();
  const ass = items.map((item) => {
    return item.name;
  });

  console.log(ass);

  const onchangeSidebar = (id) => {
    dispatch(fetchCircuitBreakers({ id }));
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
