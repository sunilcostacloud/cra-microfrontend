import React from "react";
import { Link } from "react-router-dom";

const PageB = () => {
  return (
    <div>
      <div>Page B from App2</div>
      <Link to="/child-app/page-a">Go to Page A</Link>
    </div>
  );
};

export default PageB;
