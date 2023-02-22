import { Fragment, useState } from "react";
const init = [
  {
    name: "Flor",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    name: "Peraj",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    name: "Flower",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
];
const OldPanelPage = () => {
  const [findCard, setFindCard] = useState("");
  const [cardsArr, setCardsArr] = useState(init);
  //!This PanelPage is before using useEffect
  // const handleFindOnChange_long = (ev) => {
  //   setFindCard(ev.target.value);
  //   let regexFind = new RegExp(ev.target.value, "i");
  //   let cardsArrCopy = JSON.parse(JSON.stringify(init));
  //   cardsArrCopy = cardsArrCopy.filter((item) => regexFind.test(item.name));
  //   setCardsArr(cardsArrCopy);
  // };

  const handleFindChange = (ev) => {
    setFindCard(ev.target.value);
    let regexFind = new RegExp(ev.target.value, "i");
    setCardsArr((prevCardsArr) =>
      init.filter((item) => regexFind.test(item.name))
    );
  };
  let url = "";
  return (
    <Fragment>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="find"
          value={findCard}
          onChange={handleFindChange}
        />
        <label htmlFor="floatingInput">Find</label>
      </div>
      <div className="row row-cols-1 row-colsmd-2 g-4 flex justify-content-around mt-2">
        {cardsArr.map((item) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.img} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href={url} className="btn btn-primary">
                Click
              </a>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default OldPanelPage;
