import { Fragment, useEffect, useState } from "react";
import MyCards from "../components/MyCards.component";
import axios from "axios";

let initData = [];
const HomePage = () => {
  const [displayAll, setDisplayAll] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards/cards");
        initData = data;
        setDisplayAll(initData);
      } catch (err) {
        console.log("Error", err);
      }
    })();
  }, []);
  return (
    <Fragment>
      <div className="card" style={{ width: "18rem" }}>
        {displayAll.map((item) => (
          <MyCards
            key={"userCards" + item._id}
            name={item.title}
            img={item.image.url}
            description={item.description}
            id={item._id}
          />
        ))}
      </div>
    </Fragment>
  );
};
export default HomePage;
