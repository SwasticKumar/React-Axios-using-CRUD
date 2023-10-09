import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          <img src="./video/logo.png" alt="logo" />
        </a>

        <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
          <li className="nav-item ">
            <Link className="text-white fs-4" to="/">
              <i class="fas fa-home"></i>
            </Link>
          </li>
        </ul>

        <Link className="text-danger fs-3" to="/ListPages">
          <i class="fa-solid fa-list"></i>
        </Link>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container">
    //     <NavLink className="navbar-brand" to="/">
    //     <img src="./video/logo.png" alt="logo" />
    //     </NavLink>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //       <ul className="navbar-nav ml-auto mx-3">
    //         <h3><li className="nav-item">
    //           <NavLink
    //             to="/"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //           <i class="fas fa-home"></i>
    //           </NavLink>
    //         </li></h3>
    //         <h3><li className="nav-item ">
    //           <NavLink
    //             to="/ListPages"
    //             className="nav-link text-danger"
    //             activeClassName="active"
    //           >
    //           <i class="fa-solid fa-list"></i>
    //           </NavLink>
    //         </li></h3>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;
