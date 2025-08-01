import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCircuitBreakers } from "../../model/slices/circuitBreakersSlice";

function Card({ id, name, image_src }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(fetchCircuitBreakers({ id }));
      }}
    >
      <Link to={`/catalog/${id}`} className="card-item">
        <div className="card-img">
          <div className="img-block">
            <img src={image_src} alt="" />
          </div>
        </div>
        <div className="card-info">
          <p className="card-info_title">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
