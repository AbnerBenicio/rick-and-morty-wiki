import PropTypes from "prop-types";

const CardPlanet = ({ name, type }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <div className="specie">
        <label>Type:</label>
        <p>{type}</p>
      </div>
    </div>
  );
};

CardPlanet.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

export default CardPlanet;