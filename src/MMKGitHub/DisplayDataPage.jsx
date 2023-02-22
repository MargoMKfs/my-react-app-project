import { Fragment, useState, useEffect } from "react";
const init = [
  {
    id: "21",
    name: "Flor1",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "22",
    name: "Flor2",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
  {
    id: "23",
    name: "Flor3",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  },
];
const DisplayData = () => {
  const [findCard, setFindCard] = useState("");
  const [cardsArr, setCardsArr] = useState(init);
  const [cardsSort, setCardsSort] = useState(cardsArr);

  useEffect(() => {
    let regexFind = new RegExp(findCard, "i");
    setCardsArr((prevCardsArr) =>
      init.filter((item) => regexFind.test(item.name))
    );
  }, [findCard]);

  useEffect(() => {
    const sortByDesc = [...init].sort((a, b) => a.id.localeCompare(b.id));
    setCardsSort(sortByDesc);
  }, []);

  // const handleFindOnChange_long = (ev) => {
  //   setFindCard(ev.target.value);
  //   let regexFind = new RegExp(ev.target.value, "i");
  //   let cardsArrCopy = JSON.parse(JSON.stringify(init));
  //   cardsArrCopy = cardsArrCopy.filter((item) => regexFind.test(item.name));
  //   setCardsArr(cardsArrCopy);
  // };

  const handleFindChange = (ev) => {
    setFindCard(ev.target.value);
  };

  const handleSortClickBtn = () => {
    setCardsSort(cardsSort);
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
        <button onClick={handleSortClickBtn}>Sort</button>
      </div>
      <div className="row row-cols-1 row-colsmd-2 g-4 flex justify-content-around mt-2">
        {cardsArr.map((item, index) => (
          <div
            className="card"
            key={"cards" + index}
            style={{ width: "18rem" }}
          >
            <img src={item.img} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <h5>{item.id}</h5>
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

export default DisplayData;
