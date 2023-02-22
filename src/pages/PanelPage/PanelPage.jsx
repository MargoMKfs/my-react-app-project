import { Fragment, useState, useEffect } from "react";
import MyCards from "../../components/MyCards.component";
let init = [
  {
    id: "21",
    name: "Flor1",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "22",
    name: "Flor2",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: "23",
    name: "Flor3",
    img: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];
const PanelPage = () => {
  const [findCard, setFindCard] = useState("");
  const [cardsArr, setCardsArr] = useState(init);

  useEffect(() => {
    let regexFind = new RegExp(findCard, "i");
    setCardsArr((prevCardsArr) =>
      init.filter((item) => regexFind.test(item.name))
    );
  }, [findCard]);

  const handleFindChange = (ev) => {
    setFindCard(ev.target.value);
  };

  const handleSortClickBtn = () => {
    const sortByDesc = [...init].sort((a, b) => b.id - a.id);
    setCardsArr(sortByDesc);
  };

  const handleCardsOnDelete = (id) => {
    init = init.filter((item) => item.id !== id);
    setCardsArr(init);
  };

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
        {cardsArr.map((item) => (
          <MyCards
            key={"cards" + item.id}
            name={item.name}
            img={item.img}
            description={item.description}
            id={item.id}
            onDelete={handleCardsOnDelete}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default PanelPage;
