import React from "react";
import { Link } from "react-router-dom";

const PageA = () => {
  return (
    <div>
      <div>Page A from App2</div>
      <Link to="/child-app/page-b">Go to Page B</Link>
    </div>
  );
};

export default PageA;
