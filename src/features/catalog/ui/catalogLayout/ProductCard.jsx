import { Link } from "react-router-dom";

function ProductCard({ id, image_src, name }) {
  return (
    <div>
      <Link to={`/catalog/${id}`}>
        <div className="card-item">
          <div className="card-img">
            <div className="img-block">
              <img src={image_src} alt="" />
            </div>
          </div>
          <div>
            <div className="card-info">{name}</div>
            <button className="btn_produktCard">Купить</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
