import { Link, useParams } from "react-router-dom";
import { getCard } from "../services/CardService";
import { useCard } from "../hooks/useCard";

const Card = ({ card }) => {
  const {
    bizName: name,
    bizImage: image,
    bizDescription: desc,
    bizPhone: phone,
    bizAddress: address,
    _id: id,
  } = card;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={`${name} image`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{phone}</li>
          <li className="list-group-item">{address}</li>
          <Link to={`/edit-card/${id}`}>Edit Card</Link>
          <Link to={`/delete-card/${id}`}>Delete Card</Link>
        </ul>
      </div>
    </div>
  );
};

export default Card;
