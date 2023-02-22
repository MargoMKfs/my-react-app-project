const CharsCards = ({ characters }) => {
  // characters is the characters' array
  return (
    <div className="row">
      {characters.map((item, index) => {
        return (
          <div key={index} className="col d-flex justify-content-center">
            <div
              className="card m-3"
              style={{
                boxShadow: "10px 10px 5px 5px green",
                border: "none",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded"
                style={{ width: "18rem" }}
              />
              <ul className="list-group border-0 p-2">
                <li className="bg-success text-white m-1 name">{item.name}</li>
                <li>Status: {item.status}</li>
                <li>Species: {item.species}</li>
                <li>Gender:{item.gender}</li>
              </ul>
              <button className="btn bg-danger">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CharsCards;
