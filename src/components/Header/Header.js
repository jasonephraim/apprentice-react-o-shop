import React from "react";

const Header = () => {
    
  
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div
            className="navbar-brand"
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
              <li className="nav-item active">
                <div
                  className="nav-link"
                >
                  Home
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                >
                  Shopping Cart
                </div>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="dropdown01"
                >
                  Username
                </div>
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