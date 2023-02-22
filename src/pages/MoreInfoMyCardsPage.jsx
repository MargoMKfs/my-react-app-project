import { useEffect, useState } from "react";
import axios from "axios";
import MyCards from "../components/MyCards.component";
import { useParams } from "react-router-dom";
const MoreInfoMyCards = () => {
  const [myCards, setMyCards] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get(`/cards/card/${id}`);
        setMyCards(data);
      } catch (err) {}
    })();
  }, []);
  return (
    myCards && (
      <MyCards
        name={myCards.title}
        img={myCards.image.url}
        description={myCards.description}
        id={myCards._id}
      />
    )
  );
};
export default MoreInfoMyCards;
