import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faCircleInfo,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MyCards = ({ name, img, description, id, onDelete }) => {
  const handleCardsDeleteBtn = () => {
    onDelete(id);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p className="card-text">{description}</p>
        <button className="btn btn-danger" onClick={handleCardsDeleteBtn}>
          Delete
          <FontAwesomeIcon icon={faTrashCan} className="ms-1" />
        </button>
        <Link to={`/moreinfo/${id}`} className="btn btn-success ms-2">
          Show more
          <FontAwesomeIcon icon={faCircleInfo} className="ms-1" />
        </Link>
        <Link to={`/editcards/${id}`} className="btn btn-primary ms-2">
          Edit
          <FontAwesomeIcon icon={faEdit} className="ms-1" />
        </Link>
      </div>
    </div>
  );
};

export default MyCards;
