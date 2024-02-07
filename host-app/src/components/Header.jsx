import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav style={{ marginBottom: "3rem" }}>
        <Link to={`/page-1`} style={{ marginRight: "1rem" }}>
          App1 Page1
        </Link>
        <Link to={`/page-2`} style={{ marginRight: "1rem" }}>
          App1 Page2
        </Link>
        <Link to={`/child-app/page-a`} style={{ marginRight: "1rem" }}>
          App2 PageA
        </Link>
        <Link to={`/child-app/page-b`}>App2 PageB</Link>
      </nav>
    </div>
  );
};

export default Header;
