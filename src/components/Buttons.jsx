import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Buttons = ({ next, prev, type, pag }) => {
  return (
    <div className="buttons">
      {prev === null ? (
        <a className="disable">Prev</a>
      ) : (
        <Link to={`/${type}/${(Number(pag) - 1)}`}>Prev</Link>
      )}
      {next === null ? (
        <a className="disable">Next</a>
      ) : (
        <Link to={`/${type}/${(Number(pag) + 1)}`}>Next</Link>
      )}
    </div>
  );
};

Buttons.propTypes = {
  next: PropTypes.string,
  prev: PropTypes.string,
  type: PropTypes.string,
  pag: PropTypes.string,
};

export default Buttons;
