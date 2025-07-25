import { Link } from 'react-router-dom';

function Card({ id, name, image_src }) {

  return (
    <>
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
    </>
  );
}

export default Card;
