import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <div>Page 1 from App1</div>
      <Link to="/page-2">Go to Page 2</Link>
    </div>
  );
};

export default Page1;
