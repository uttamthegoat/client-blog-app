import React from "react";
import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div id="error-page">
      <div className="content">
        <h2 className="header px-2" data-text="404">
          404
        </h2>
        <h4 className="px-2" data-text="Opps! Page not found">
          Oops! Page not found
        </h4>
        <p className="px-2">
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem.
        </p>
        <div className="btns">
          <Link to="/">return home</Link>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
