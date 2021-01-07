import { useState } from "react";

import history from '../../../utils/history';
import routePaths from '../../../constants/routePaths';
import Dropdown from '../dropdown/dropdown';
import NavLinks from "../navLinks/navLinks";


const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = (bool) => {
    setDropdown(!bool);
  };
  
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div
            className="navbar-brand"
            onClick={() => {
              history.push(routePaths.home);
            }}
          >
            react-o-shop
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              { NavLinks() }
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="dropdown01"
                  onClick={() => {
                    toggleDropdown(dropdown);
                  }}
                >
                  Username
                </div>
                {dropdown ? Dropdown() : null}
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
    );
  };

export default Header;
