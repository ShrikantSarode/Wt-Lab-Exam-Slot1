// ./Components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
   <div className="container d-flex justify-content-center">
     <header>
      <ul class="nav">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/addArticles">
            Add Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/updateArticles">
            Update Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/showArticles">
            Show Articles
          </Link>
        </li>
      </ul>
    </header>
   </div>
  );
}

export default Header;
