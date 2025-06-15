function Card({ id, name, image_src }) {
  return (
    <>
      <div className="card-item">
        <div className="card-img">
          <p>
            <span /> В наличии
          </p>
          <div className="img-block">
            <img src={image_src} alt="" />
          </div>
        </div>
        <div className="card-info">
          <p className="card-info_title">{name}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
