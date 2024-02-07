import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <div>Page 2 from App1</div>
      <Link to="/page-1">Go to Page 1</Link>
    </div>
  );
};

export default Page2;
