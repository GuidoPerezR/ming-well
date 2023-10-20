import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className=" gradient-custom-2 p-4 mb-4">
        <div>
          <ul className="nav d-flex justify-content-between">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link fs-5" aria-disabled="true">
                <Link to="/">Sign off</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
