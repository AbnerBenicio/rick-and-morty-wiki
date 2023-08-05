import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import CardPlanet from "./Cards/CardPlanet";

const Locations = () => {
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
        `https://rickandmortyapi.com/api/location/?page=${pag}`,
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
      <h1>Locais</h1>
      <div id="inicio" className="characters">
        {data.map((character) => {
          return (
            <CardPlanet
              key={character.id}
              name={character.name}
              type={character.type}
            />
          );
        })}
      </div>

      <Buttons next={next} prev={prev} type="location" pag={pag} />
    </div>
  );
};

export default Locations;