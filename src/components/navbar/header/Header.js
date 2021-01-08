import { useState } from "react";

import history from '../../../utils/history';
import routePaths from '../../../constants/routePaths';
import pages from "../../../constants/navLinksList";

const navItems = [];
const dropdownItems = [];

pages.map((page, i, type) => {
  if (page.type === 'dropdown') {
    dropdownItems.push(
    
        <div className="dropdown-item"
            key={i}
            id={page.type}
            onClick={() => {
                history.push(page.path);
            } }
        >
            {page.name}
        </div>
    );
    return dropdownItems;
  } else {
    navItems.push(
      <li className="nav-item"
          key={i}
          id={page.type}
      >
          <div
              className="nav-link"
              onClick={() => {
                  history.push(page.path);
              } }
          >
              {page.name}
          </div>
      </li>
    );
    return navItems;
  }
});

const Header = () => {
    const [dropdownState, setDropdown] = useState(false);
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
              { navItems }
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="dropdown01"
                  onClick={() => {
                    toggleDropdown(dropdownState);
                  }}
                >
                  Username
                </div>
                {dropdownState ? <div className="dropdown-menu show" aria-labelledby="dropdown01">{ dropdownItems }</div> : null}
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
