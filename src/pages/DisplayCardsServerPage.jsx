import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import MyCards from "../components/MyCards.component";

let initUserCards = [];
const DisplayCardsServerPage = () => {
  const [findUserCards, setFindUserCards] = useState("");
  const [userCards, setUserCards] = useState(initUserCards);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards/cards");
        initUserCards = data;
        setUserCards(initUserCards);
      } catch (err) {
        console.log(err);
        toast.error("Ops, something went wrong!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    })();
  }, []);

  useEffect(() => {
    let regexFind = new RegExp(findUserCards, "i");
    setUserCards((prevCardsArr) =>
      initUserCards.filter((item) => regexFind.test(item.title))
    );
  }, [findUserCards]);

  const handleFindChange = (ev) => {
    setFindUserCards(ev.target.value);
  };

  const handleSortClickBtn = () => {
    const sortBy = [...initUserCards].sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }

      return 0;
    });
    setUserCards(sortBy);
  };

  const handleDeleteUserCard = (id) => {
    initUserCards = initUserCards.filter((item) => item._id !== id);
    setUserCards(initUserCards);
  };

  return (
    <Fragment>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="find"
          value={findUserCards}
          onChange={handleFindChange}
        />
        <label htmlFor="floatingInput">Find</label>

        <button onClick={handleSortClickBtn}>Sort</button>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        {userCards.map((item) => (
          <MyCards
            key={"userCards" + item._id}
            name={item.title}
            img={item.image.url}
            description={item.description}
            id={item._id}
            onDelete={handleDeleteUserCard}
          />
        ))}
      </div>
    </Fragment>
  );
};
export default DisplayCardsServerPage;
