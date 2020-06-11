import React, { Fragment } from "react";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper  #b39ddb deep-purple lighten-3">
          <a href="#" className="  brand-logo left purple-text text-darken-4">
            MERCI CICCI
          </a>
          <ul id="nav-mobile" className="right ">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
        s
      </nav>
    </Fragment>
  );
};

export default Navbar;
