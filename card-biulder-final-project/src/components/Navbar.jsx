import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../services/httpService";
import { useAuth } from "../hooks/useAuth";
const Navbar = () => {
  const { user } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Card Builder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>{" "}
              {user?.biz && (
                <li className="nav-item">
                  <Link
                    to="my-cards"
                    className="nav-link active"
                    aria-current="page"
                  >
                    My-Cards
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              {user ? (
                <li className="nav-item">
                  <Link
                    to="log-out"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Log-Out
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="sign-in"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Sign-in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="sign-up"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Sign-up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
