import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const MortyAndRickPage = () => {
  const [displayCharcs, setDisplayCharcs] = useState([]);
  const urlRM = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    const displayCharcsData = async () => {
      try {
        await axios
          .get(urlRM)
          .then((res) => setDisplayCharcs(res.data.results));
      } catch (err) {
        console.log("Error from axios", err);
      }
    };
    displayCharcsData();
  }, []);

  return (
    <Fragment>
      <div className="row">
        {displayCharcs.map((item, id) => (
          <div className="card" key={"charc" + id} style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <ul>
                <li>Id: {item.id}</li>
                <li>Name: {item.name}</li>
                <li>Status: {item.status}</li>
                <li>Species: {item.species}</li>
                <li>Gender: {item.gender}</li>
              </ul>
              <button className="btn btn-danger"> Delete me </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default MortyAndRickPage;
