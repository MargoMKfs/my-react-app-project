import { useState, useEffect } from "react";
import axios from "axios";
import CharsCards from "../MMKGitHub/components/RaMCardsComponent";

const DisplayRickAndMorty = () => {
  const [charState, setCharState] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    const charcsAsync = async () => {
      try {
        await axios.get(url).then((res) => {
          setCharState(res.data.results);
          console.log(res.data.results);
        });
      } catch (error) {
        console.log(error);
      }
    };
    charcsAsync();
  }, []);
  return (
    <div className="container">
      <CharsCards characters={charState} />
    </div>
  );
};
export default DisplayRickAndMorty;
