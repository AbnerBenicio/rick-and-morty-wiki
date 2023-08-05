import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="#">Select <div className="selector">▶</div></a>
              <ul className="dropdown">
                <li><Link to="/character/1">Characters</Link></li>
                <li><Link to="/location/1">Locations</Link></li>
              </ul>
            </li>
          </ul>
        </div>
    )
}

export default Navbar