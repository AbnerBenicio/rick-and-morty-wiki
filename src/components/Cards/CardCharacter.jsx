import PropTypes from "prop-types";

const CardCharacter = ({ img, name, status, specie }) => {
  return (
    <div className="card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="status">
        <label>Status:</label>
        {status === "Alive" ? (
          <div className="dote green"></div>
        ) : status === "unknown" ? (
          <div className="dote gray"></div>
        ) : (
          <div className="dote red"></div>
        )}
        <p>{status}</p>
      </div>
      <div className="specie">
        <label>Species:</label>
        <p>{specie}</p>
      </div>
    </div>
  );
};

CardCharacter.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
};

export default CardCharacter;
