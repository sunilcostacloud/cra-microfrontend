import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <p>PageNotFound</p>
      <Link to="/child-app/page-a">Go to Page A</Link>
    </div>
  );
};

export default PageNotFound;
