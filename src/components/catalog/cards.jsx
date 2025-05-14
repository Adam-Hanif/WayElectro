import React from "react"
import { useParams } from 'react-router-dom'

function Card({ id, name, image_src }) {
  // const dispatch = useDispatch();
  const params = useParams()



  React.useEffect(() => {
    fetch(`https://way-electro-server.onrender.com/circuit_breakers_brands/${params.id}`).then(res => res.json()).then(data => console.log(data))
  }, []);
  
  
   
  if(!id) {
    return <div> Нет айди</div>
  }

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
