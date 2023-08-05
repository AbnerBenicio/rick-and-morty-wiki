import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import CardCharacter from "./Cards/CardCharacter";

const Characters = () => {
  const { pag } = useParams();

  const [data, setData] = useState([]);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);



  useEffect(() => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    async function getAPI() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pag}`,
        config
      );
      const data = await res.json();

      setData(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
    }
    getAPI();
  }, [pag]);

  return (
    <div className="panel">
      <h1>Personangens</h1>
      <div id="inicio" className="characters">
        {data.map((character) => {
          return (
            <CardCharacter
              key={character.id}
              img={character.image}
              name={character.name}
              status={character.status}
              specie={character.species}
            />
          );
        })}
      </div>

      <Buttons next={next} prev={prev} type="character" pag={pag} />
    </div>
  );
};

export default Characters;
