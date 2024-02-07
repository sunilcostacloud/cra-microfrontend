import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <p>PageNotFound</p>
      <Link to="/page-1">Go to Page 1</Link>
    </div>
  );
};

export default PageNotFound;
